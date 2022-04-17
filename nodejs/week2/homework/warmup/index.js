const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
//Add 2 routes to your index.js:
//GET /numbers/add?first=<number here>&second=<number here>.
//In response send sum (first + second).
app.get("/numbers/add", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  if (first && second) {
    const sum = parseInt(first) + parseInt(second);
    response.send(sum.toString());
  }
});
//GET /numbers/multiply/<first number here>/<second number here>.
//In response send multiplication (first * second).
app.get("/numbers/multiply/:first/:second", async (request, response) => {
  const first = request.params.first;
  const second = request.params.second;
  const multiply = parseInt(first) * parseInt(second);
  response.send(multiply.toString());
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
