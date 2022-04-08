const express = require("express");
const { response } = require("../app");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) =>
  //response.send({ reservations }) //Respond with the json for all reservations but the test is failing
  response.send(reservations)
);

//Respond with the json for the reservation with the corresponding id *
router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (id) {
    response.send(reservations[id - 1]);
  }
});
module.exports = router;
