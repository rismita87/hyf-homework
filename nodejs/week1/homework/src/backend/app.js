const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const mealsRiviewUpdater = require("./utility/mealsRiviewUpdater");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
//Here for "/meals" the test will pass if the response be an array.
//In homework the requirement is to return the JSON which we can get
//by : response.send(mealsRiviewUpdater) but then the test is failing.
app.get("/meals", async (request, response) => {
  response.send(mealsRiviewUpdater.meals);
});
app.get("/cheap-meals", async (request, response) => {
  let cheapMeals = mealsRiviewUpdater.meals.filter((meal) => meal.price < 70);
  response.send(cheapMeals); // returns an array and the testcase is passing.
  //response.send({ cheapMeal }); to get the respond with the json for all
  //the meals (including it's reviews) that are cheap (you define what a cheap meal is)
});
app.get("/large-meals", async (request, response) => {
  let largeMeals = mealsRiviewUpdater.meals.filter(
    (meal) => meal.maxNumberOfGuests > 5
  );
  response.send(largeMeals); // returns an array and the test is passing.
  //response.send({largeMeals});
  //to get response with the json for
  //all the meals (including it's reviews) that can fit lots of people
});
app.get("/meal", async (request, response) => {
  let mealIndex = Math.floor(Math.random() * meals.length);
  response.send(mealsRiviewUpdater.meals[mealIndex]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations); // returns an array and the test is passing.
  //response.send({ reservations });
  //to get response with the json for all reservations
});
app.get("/reservation", async (request, response) => {
  let reservationsIndex = Math.floor(Math.random() * reservations.length);
  response.send(reservations[reservationsIndex]);
});

module.exports = app;
