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

/*Step 3: Smart-ease - Back to the basics!
NOnoN0nOYes (Note taking app)*/

const notes = [];
var i = 0;
function saveNote(content, id) {
  notes.push({});
  for (; i < notes.length; i++) {
    notes[i].content = content;
    notes[i].id = id;
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Run dishwasher", 3);
saveNote("Cook meal", 4);

console.log(notes);

function getNote(id) {
  if (typeof id == "number") {
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      } else {
        const error1 = "Error: This id does not exist.";
        return error1;
      }
    }
  } else {
    const error2 = "Error: Please enter a number.";
    return error2;
  }
}

const firstNote = getNote(6);
console.log(firstNote);

function logOutNotesFormatted() {
  for (var i = 0; i < notes.length; i++) {
    return (
      "The note with id: " +
      notes[i].id +
      ", has the following note text: " +
      notes[i].content
    );
  }
}

console.log(logOutNotesFormatted());

/*Unique feature: to remove a note once done 
using content and returns newNotes with 
remaining contents and id*/

const newNotes = [...notes]; // make a clone of notes to remove content and to keep the original version of notes
function removeNote(content) {
  for (var i = 0; i < newNotes.length; i++) {
    if (newNotes[i].content === content) {
      newNotes.splice(i, 1);
      i--;
    }
  }
  return newNotes;
}

console.log(removeNote("Do laundry"));
