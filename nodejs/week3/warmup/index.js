const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//Added 4 routes to index.js:
//GET /calculator/add?first=<number here>&second=<number here>.
//In response send sum (first + second).
app.get("/calculator/add", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const sum = arrayWithNumbersToAdd(first) + arrayWithNumbersToAdd(second);
  response.send(sum.toString());
});
//GET /calculator/subtract?first=<number here>&second=<number here>.
//In response send subtract(first + second).
app.get("/calculator/subtract", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const subtract =
    arrayWithNumbersToSubtract(first) - arrayWithNumbersToSubtract(second);
  response.send(subtract.toString());
});

//GET /calculator/multiply/<first number here>/<second number here>.
//In response send multiplication (first * second).
app.get("/calculator/multiply", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const multiply =
    arrayWithNumbersToMultiply(first) * arrayWithNumbersToMultiply(second);
  response.send(multiply.toString());
});
//GET /calculator/divide/<first number here>/<second number here>.
//In response send divide (first * second).
app.get("/calculator/divide", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const divide =
    arrayWithNumbersToDivide(first) / arrayWithNumbersToDivide(second);
  response.send(divide.toString());
});

function arrayWithNumbersToAdd(param) {
  const values = Array.isArray(param) ? param : [param];
  const numbers = values.map((value) => parseInt(value));
  return numbers.reduce((sum, number) => sum + number, 0);
}

function arrayWithNumbersToSubtract(param) {
  const values = Array.isArray(param) ? param : [param];
  const numbers = values.map((value) => parseInt(value));
  return numbers.reduce((subtract, number) => subtract + number, 0);
}

function arrayWithNumbersToMultiply(param) {
  const values = Array.isArray(param) ? param : [param];
  const numbers = values.map((value) => parseInt(value));
  return numbers.reduce((multiply, number) => multiply * number, 1);
}

function arrayWithNumbersToDivide(param) {
  const values = Array.isArray(param) ? param : [param];
  const numbers = values.map((value) => parseInt(value));
  return numbers.reduce((multiply, number) => multiply + number, 0);
}

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
