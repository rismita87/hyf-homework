const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
//Added 4 routes to index.js:
//GET /calculator/add?first=<number here>&second=<number here>.
//In response send sum (first + second).
app.get("/calculator/add", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const sum = arrayContentAddition(first) + arrayContentAddition(second);
  response.send(sum.toString());
});
//GET /calculator/subtract?first=<number here>&second=<number here>.
//In response send subtract(first + second).
app.get("/calculator/subtract", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const subtract =
    arrayContentSubtraction(first) - arrayContentSubtraction(second);
  response.send(subtract.toString());
});

//GET /calculator/multiply/<first number here>/<second number here>.
//In response send multiplication (first * second).
app.get("/calculator/multiply", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const multiply =
    arrayContentMultiplier(first) * arrayContentMultiplier(second);
  response.send(multiply.toString());
});
//GET /calculator/divide/<first number here>/<second number here>.
//In response send divide (first * second).
app.get("/calculator/divide", async (request, response) => {
  const first = request.query.first;
  const second = request.query.second;
  const divide = arrayContentDivision(first) / arrayContentDivision(second);
  response.send(divide.toString());
});
function arrayContentAddition(arrayVar) {
  let addoutput = 0;
  if (arrayVar.length > 1) {
    arrayVar.forEach((element) => {
      addoutput = addoutput + parseInt(element);
    });
  } else addoutput = parseInt(arrayVar);
  return addoutput;
}
function arrayContentSubtraction(arrayVar) {
  let subtractionoutput = 0;
  if (arrayVar.length > 1) {
    arrayVar.forEach((element) => {
      subtractionoutput = subtractionoutput + parseInt(element);
    });
  } else subtractionoutput = parseInt(arrayVar);
  return subtractionoutput;
}
function arrayContentMultiplier(arrayVar) {
  let multioutput = 1;
  if (arrayVar.length > 1) {
    arrayVar.forEach((element) => {
      multioutput = multioutput * parseInt(element);
    });
  } else multioutput = parseInt(arrayVar);
  return multioutput;
}
function arrayContentDivision(arrayVar) {
  let divisionoutput = 0;
  if (arrayVar.length > 1) {
    arrayVar.forEach((element) => {
      divisionoutput = divisionoutput + parseInt(element);
    });
  } else divisionoutput = parseInt(arrayVar);
  return divisionoutput;
}
