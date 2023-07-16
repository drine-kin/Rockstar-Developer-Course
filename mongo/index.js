const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");

async function read() {
	const data = await db.collection("tasks").findOne();
	console.log(data);
}

// read()

async function insert(doc) {
	const result = await db.collection("tasks").insertOne(doc);
	console.log(result);
}

// insert({ subject: "Milk", done: "false" });
// insert({ subject: "Bread", done: "false" });

async function updateDone(subject, done) {
	const result = await db
		.collection("tasks")
		.updateOne({ subject }, { $set: { done } });
	console.log(result);
}

// updateDone("Bread", false);

async function deleteOne(subject) {
	const result = await db.collection("tasks").deleteOne({ subject });
	console.log(result);
}

deleteOne("Kiwi");
