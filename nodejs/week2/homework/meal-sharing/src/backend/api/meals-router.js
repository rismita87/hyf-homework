const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
  //Get meals that has a price smaller than maxPrice
  const maximumPrice = request.query.maxPrice;
  const mealTitle = request.query.title;
  const createdAfter = request.query.createdAfter;
  const limit = request.query.limit;
  let keysAreInValid = false;
  //If the users writes a query parameter that is not supported
  Object.keys(request.query).forEach(function (key) {
    if (
      key != "maxPrice" &&
      key != "title" &&
      key != "createdAfter" &&
      key != "limit"
    ) {
      keysAreInValid = true;
    }
  });
  if (keysAreInValid) {
    response
      .status(400)
      .send(
        "quary parameter not supported. Supproted query parameters are: 'maxPrice','title','createdAfter' & 'limit'"
      );
  } else if (maximumPrice) {
    if (isNaN(maximumPrice)) {
      //respond with status 400 when maxPrice is not parseable
      response.status(400).send("wrong maximumPrice format");
    } else {
      //respond with meals that has a price smaller than maxPrice
      const mealsUnderMaxPrice = meals.filter(
        (meal) => meal.price < maximumPrice
      );
      response.send(mealsUnderMaxPrice);
    }
  } else if (mealTitle) {
    //respond with meals that partially match a title.
    const mealIncludingMealTitle = meals.filter((meal) =>
      meal.title.includes(mealTitle)
    );
    response.send(mealIncludingMealTitle);
  } else if (createdAfter) {
    // to ckeck for valid data type format for date
    const isValidDate = function (date) {
      return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
    };
    if (isValidDate(createdAfter)) {
      //return meals that has been created after the date
      const mealsCreatedAfter = meals.filter(
        (meal) => new Date(meal.createdAt) > new Date(createdAfter)
      );
      response.send(mealsCreatedAfter);
    } else {
      //respond with status 400 when the date is not parseable
      response.status(400).send("wrong date format");
    }
  } else if (limit) {
    if (isNaN(limit)) {
      //respond with status 400 when the limit is not parseable
      response.status(400).send("wrong limit format");
    } else {
      const limitedMeal = meals.slice(0, limit); //return only specific number of meals
      response.send(limitedMeal);
    }
  } else {
    response.send(meals); //response.send({ meals }); //Respond with the json for all the meals but the test is failing
  }
});
//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (isNaN(id)) {
    //respond with status 400 when  is not parseable
    response.status(400).send("wrong id format");
  } else if (id > meals.length) {
    response.send("No meal with this id number!!");
  } else {
    response.send(meals[id - 1]);
  }
});

module.exports = router;
