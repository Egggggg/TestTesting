const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

server.listen("5000", () => {
	console.log("Listening on :5000");
});