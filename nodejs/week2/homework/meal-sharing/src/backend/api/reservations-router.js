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
  if (isNaN(id)) {
    //respond with status 400 when  is not parseable
    response.status(400).send("wrong id format");
  } else if (id) {
    const reservationWithInputId = reservations.find(
      (reservation) => reservation.id == id
    );
    response.send(
      reservationWithInputId
        ? reservationWithInputId
        : "No reservation with this id number!!"
    );
  }
});
module.exports = router;
