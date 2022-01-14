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

//Series duration of my life
const seriesDurations = [
  {
    title: "The Mentalist",
    days: 4,
    hours: 12,
    minutes: 13,
  },
  {
    title: "Kota Factory",
    days: 0,
    hours: 7,
    minutes: 30,
  },
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Money Heist",
    days: 1,
    hours: 23,
    minutes: 50,
  },
];

function logOutSeriesText() {
  for (var i = 0; i < seriesDurations.length; i++) {
    var seriesDurationInMinutes =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;
    var percentageTaken =
      (seriesDurationInMinutes / avarageLifeSpanInMinutes) * 100;
    totalPercentage += percentageTaken;
    return (
      seriesDurations[i].title + " took " + percentageTaken + "% of my life."
    );
  }
  return "In total that is " + totalPercentage + "% of my life.";
}
var totalPercentage = 0;
const avarageLifeSpan = 80;
const avarageLifeSpanInMinutes = 80 * 365 * 24 * 60;

console.log(logOutSeriesText());
