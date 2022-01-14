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

//CactusIO-interactive (Smart phone usage app) optional
const activities = [];
var i = 0;
function addActivity(data, activity, duration) {
  if (data === undefined || activity === undefined || duration === undefined) {
    return "Add some activities before calling showStatus";
  }
  activities.push({});
  for (; i < activities.length; i++) {
    activities[i].data = data;
    activities[i].activity = activity;
    activities[i].duration = duration;
  }
}
addActivity("23-7-2018", "Amazon Prime", 10);
addActivity("23-7-2018", "Youtube", 30);
addActivity("24-7-2018", "MTV", 30);
addActivity("24-7-2018", "Youtube", 30);
addActivity("26-7-2018", "Amazon Prime", 30);
console.log(activities);

var totalUsage = 0;
var j = 0; // extra feature to calculate with how many activities the usageLimite is reached.
const usageLimit = 120;
function showStatus() {
  const totalActivities = activities.length;
  for (var i = 0; i < activities.length; i++) {
    totalUsage += activities[i].duration;
    if (j === 0) {
      if (totalUsage > usageLimit || totalUsage === usageLimit) {
        var limitOfActivity = i + 1;
        console.log(
          "You have reached your usage limit with first " +
            limitOfActivity +
            " activities of your activities list, no more smartphoning for you!"
        );
        j = j + 1;
      }
    }
  }
  return [totalActivities, totalUsage];
}
const showMyStatus = showStatus(activities);
console.log(
  "You have added " +
    showMyStatus[0] +
    " activities. They amount to " +
    showMyStatus[1] +
    " min. of usage"
);
//FOR OPTIONAL FEATURES:
const newActivities = [];
var i = 0;
var today = new Date();
var todaysDate =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
function addActivityWithoutDate(activity, duration) {
  if (activity === undefined || duration === undefined) {
    return "Add some activities before calling showStatus";
  }
  newActivities.push({});
  for (; i < newActivities.length; i++) {
    newActivities[i].date = todaysDate;
    newActivities[i].activity = activity;
    newActivities[i].duration = duration;
  }
}
addActivityWithoutDate("Youtube", 30);
addActivityWithoutDate("Facebook", 40);
addActivityWithoutDate("News", 30);

console.log(newActivities);

var k = 0;
function newShowStatus() {
  for (i = 0; i < newActivities.length; i++) {
    if (newActivities[i].date === todaysDate) {
      k = k + 1;
    }
  }
  return k + " number of activities on " + todaysDate;
}
console.log(newShowStatus());

function userSpentMostTime() {
  var array = activities;
  var newArray = [];
  j = 0;
  while (array.length != 0) {
    var anotherArray = [];
    k = 0;
    newArray.push({});
    newArray[j].duration = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i].activity === array[0].activity) {
        newArray[j].activity = array[i].activity;
        newArray[j].duration += array[i].duration;
      } else {
        anotherArray.push({});
        anotherArray[k].activity = array[i].activity;
        anotherArray[k].duration = array[i].duration;
        k++;
      }
    }
    j++;
    array = anotherArray;
  }
  var temp_var = 0;
  var most_used_activity = "";
  for (x = 0; x < newArray.length; x++) {
    if (newArray[x].duration > temp_var) {
      temp_var = newArray[x].duration;
      most_used_activity = newArray[x].activity;
    } else {
      continue;
    }
  }
  return "Most used activity is: " + most_used_activity;
}
console.log(userSpentMostTime());
