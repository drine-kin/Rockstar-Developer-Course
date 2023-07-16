const express = require("express");

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
	const data = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
		{ id: 3, name: "Chloe" },
		{ id: 4, name: "Dave" },
	];
	res.json(data);
});

app.get("/users/:id", (req, res) => {
	const { id } = req.params;
	res.json({ id });
});

app.post("/users/", (req, res) => {
	const { subject } = req.body;
	if (!subject) return res.status(400).json({ msg: "subject required" });
	return res.status(201).json({ subject });
});

app.listen(8888, () => {
	console.log("Api server is running on port 8888");
});
