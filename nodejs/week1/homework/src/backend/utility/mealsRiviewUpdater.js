const meals = require("../data/meals");
const reviews = require("../data/reviews");

function addedReviewMealObj(modMeals) {
  modMeals.forEach((modMeal) => {
    reviews.forEach((review) => {
      if (review.mealId == modMeal.id) {
        if (modMeal.reviews) {
          modMeal.reviews.push(review);
        } else {
          modMeal.reviews = [review];
        }
      }
    });
  });

  return modMeals;
}
module.exports.meals = addedReviewMealObj(meals);
