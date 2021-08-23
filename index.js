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

function eatShit(num1, num2) {
	return num1 + num2;
}

function drinkWater(num1, num2) {
	return num1 * num2;
}

function killBears(num1, num2) {
	return num1 / num2;
}

function peelBanana(num1, num2) {
	return num1 - num2;
}