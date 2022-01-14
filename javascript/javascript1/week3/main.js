//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
for (var i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
    i--;
  }
}
console.log(names);

//When will we be there??
const travelInformation = {
  speed: 60,
  destinationDistance: 567,
};

function travelTimeCalculation() {
  var hours = (distance - (distance % speed)) / speed;
  var minutes = ((distance % speed) * 60) / speed;
  return [hours, minutes];
}
let distance = travelInformation.destinationDistance;
let speed = travelInformation.speed;
const travelTime = travelTimeCalculation(travelInformation);
console.log(travelTime[0] + " hours and " + travelTime[1] + " minutes.");
