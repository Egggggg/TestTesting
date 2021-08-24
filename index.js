const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

const expressServer = server.listen("443", () => {
	console.log("Listening on :443");
});

process.on("SIGTERM", () => {
	expressServer.close((err) => {
		process.exit(err ? 1 : 0);
	});
});