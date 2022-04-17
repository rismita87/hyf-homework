const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  const maximumPrice = request.query.maxPrice;
  const title = request.query.title;
  const createdAfter = request.query.createdAfter;
  const limit = request.query.limit;
  const keyListInput = Object.keys(request.query);

  let resultMealJSON = [];
  let errorState = 0;
  let errorCode = 400;
  let errorMessage =
    "quary parameter not supported. Supproted query parameters are: 'maxPrice','title','createdAfter' & 'limit'";
  resultMealJSON = meals;
  keyListInput.forEach((key) => {
    switch (key) {
      case "maxPrice":
        {
          if (isNaN(maximumPrice)) {
            //To respond with status 400 when maxPrice is not parseable
            errorCode = 400;
            errorMessage = "wrong maximumPrice format";
            errorState = 1;
            break;
          } else {
            //respond with meals that has a price smaller than maxPrice
            resultMealJSON = resultMealJSON.filter(
              (meal) => meal.price < maximumPrice
            );
          }
        }
        break;
      case "title":
        //respond with meals that partially match a title.
        resultMealJSON = resultMealJSON.filter((meal) =>
          meal.title.includes(title)
        );
        break;
      case "createdAfter":
        {
          // to ckeck for valid data type format for date
          const isValidDate = function (date) {
            return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
          };
          if (isValidDate(createdAfter)) {
            //return meals that has been created after the date
            resultMealJSON = resultMealJSON.filter(
              (meal) => new Date(meal.createdAt) > new Date(createdAfter)
            );
          } else {
            //To respond with status 400 when the date is not parseable
            errorCode = 400;
            errorMessage = "wrong date format";
            errorState = 1;
            break;
          }
        }
        break;
      case "limit":
        {
          if (isNaN(limit)) {
            //To respond with status 400 when the date is not parseable
            errorCode = 400;
            errorMessage = "wrong limit format";
            errorState = 1;
            break;
          } else {
            //return only specific number of meals
            resultMealJSON = resultMealJSON.slice(0, limit);
          }
        }
        break;
      default: // to send an error messege
        errorState = 1;
        break;
    }
  });
  if (!Object.keys(request.query).length) {
    response.send(meals);
  } else if (errorState == 0) {
    response.send(resultMealJSON);
  } else {
    //respond with status 400 when the date is not parseable
    response.status(errorCode).send(errorMessage);
  }
});
//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (isNaN(id)) {
    //responds with status 400 when the query is not parseable
    response.status(400).send("wrong id format");
  } else if (id) {
    const mealWithInputId = meals.find((meal) => meal.id == id);
    response.send(
      mealWithInputId ? mealWithInputId : "No meal with this id number!!"
    );
  }
});

module.exports = router;
