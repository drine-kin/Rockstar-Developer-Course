const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");
const tasks = db.collection("tasks");

app.get("/tasks", async function (req, res) {
	try {
		const data = await tasks.find().toArray();
		setTimeout(() => {
			res.json(data);
		}, 3000);
	} catch (error) {
		res.status(500).json({ msg: "Something went wrong" });
	}
});

app.post("/tasks", async function (req, res) {
	const { subject } = req.body;
	if (!subject) return res.status(400).json({ msg: "subject required" });

	const data = { subject, done: false };
	const result = await tasks.insertOne({ subject, done: false });

	res.json({ _id: result.insertedId, ...data });
});

app.put("/tasks/:id/toggle", async function (req, res) {
	const { id } = req.params;

	const result = await tasks.updateOne({ _id: new ObjectId(id) }, [
		{
			$set: { done: { $not: "$done" } },
		},
	]);
	res.json(result);
});

app.delete("/tasks/:id", async function (req, res) {
	const { id } = req.params;
	const result = await tasks.deleteOne({ _id: new ObjectId(id) });
	res.json(result);
});

app.delete("/tasks", async function (req, res) {
	const result = await tasks.deleteMany({ done: true });
	res.json(result);
});

app.listen(8080, () => {
	console.log("Api running at 8080");
});
