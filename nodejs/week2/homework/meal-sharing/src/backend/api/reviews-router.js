const express = require("express");
const { response } = require("../app");
const router = express.Router();
const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) =>
  //response.send({ reviews })  //Respond with the json for all the reviews but the test is failing
  response.send(reviews)
);

//Respond with the json for the review with the corresponding id *
router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (isNaN(id)) {
    //respond with status 400 when  is not parseable
    response.status(400).send("wrong id format");
  } else if (id) {
    const reviewWithInputId = reviews.find((review) => review.id == id);
    response.send(
      reviewWithInputId
        ? reviewWithInputId
        : "No reservation with this id number!!"
    );
  }
});

module.exports = router;
