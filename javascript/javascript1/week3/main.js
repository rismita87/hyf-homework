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
for (let i = 0; i < names.length; i++) {
  if (names[i] == nameToRemove) {
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

function travelTimeCalculation(distance, speed) {
  var hours = (distance - (distance % speed)) / speed;
  var minutes = ((distance % speed) * 60) / speed;
  return [hours, minutes];
}
const travelTime = travelTimeCalculation(
  travelInformation.destinationDistance,
  travelInformation.speed
);
console.log(`${travelTime[0]}  hours and  ${travelTime[1]}  minutes.`);

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
function logOutSeriesText(avarageLifeSpan) {
  const arrayWithTotalAndIndividualShow = [];
  const arrayWithIndividualShow = [];
  let totalPercentage = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const avarageLifeSpanInMinutes = avarageLifeSpan * 365 * 24 * 60;
    const seriesDurationInMinutes =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;
    const percentageTaken =
      (seriesDurationInMinutes / avarageLifeSpanInMinutes) * 100;
    totalPercentage += percentageTaken;
    const obj = {};
    obj[seriesDurations[i].title] = percentageTaken.toFixed(6) + "%";
    arrayWithIndividualShow.push(obj);
  }
  const obj = {};
  obj["Total"] = totalPercentage.toFixed(6) + "%";
  arrayWithTotalAndIndividualShow.push(obj);
  arrayWithTotalAndIndividualShow.push(arrayWithIndividualShow);
  return arrayWithTotalAndIndividualShow;
}
console.log(
  "The % of my life taken by the total and individual show is given below: "
);
console.log(logOutSeriesText(100));

/*Step 3: Smart-ease - Back to the basics!
NOnoN0nOYes (Note taking app)*/

const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
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
        continue;
      }
    }
    const error1 = "Error: This id does not exist.";
    return error1;
  } else {
    const error2 = "Error: Please enter a number.";
    return error2;
  }
}

//const firstNote = getNote(6);
console.log(getNote(8));

function logOutNotesFormatted() {
  for (var i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}
logOutNotesFormatted();

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
    console.log("Add some activities before calling showStatus");
  }
  activities.push({ data: data, activity: activity, duration: duration });
}
addActivity("23-7-2018", "Amazon Prime", 10);
addActivity("23-7-2018", "Youtube", 30);
addActivity("24-7-2018", "MTV", 30);
addActivity("24-7-2018", "Youtube", 30);
addActivity("26-7-2018", "Amazon Prime", 30);
console.log(activities);

// Extra feature to calculate with how many activities the usageLimite is reached.
function showStatus(usageLimit) {
  let totalUsage = 0;
  let j = 0;
  for (let i = 0; i < activities.length; i++) {
    totalUsage += activities[i].duration;
    if (j === 0) {
      if (totalUsage >= usageLimit) {
        let limitOfActivity = i + 1;
        console.log(
          "You have reached your usage limit with first " +
            limitOfActivity +
            " activities of your activities list, no more smartphoning for you!"
        );
        j = j + 1;
      }
    }
  }
  return [activities.length, totalUsage];
}
showStatus(120);
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
function addActivityWithoutDate(activity, duration) {
  var today = new Date();
  var todaysDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  if (activity === undefined || duration === undefined) {
    return "Add some activities before calling showStatus";
  }
  newActivities.push({
    date: todaysDate,
    activity: activity,
    duration: duration,
  });
}
addActivityWithoutDate("Youtube", 30);
addActivityWithoutDate("Facebook", 40);
addActivityWithoutDate("News", 30);

console.log(newActivities);

let k = 0;
let todaysShowArray = [];
function newShowStatus() {
  var today = new Date();
  var todaysDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  for (i = 0; i < newActivities.length; i++) {
    if (newActivities[i].date === todaysDate) {
      todaysShowArray.push(newActivities[i].activity);
      k++;
    }
  }
  return k + " number of activities on " + todaysDate;
}
console.log(`${newShowStatus()} and the activities are ${todaysShowArray}`);

function userSpentMostTime() {
  let array = activities; // array containg all the activities with multiple occarances fx[x,y,z,x,x,y,z]
  const newArray = []; //newArray will contain for each individual activity with added duration[x:total duration,y:total duration,z:total duration)
  j = 0;
  while (array.length != 0) {
    let anotherArray = []; // another array will cantain the rest
    k = 0; //of activities while one acitivity is
    newArray.push({}); //picked up in newArray to add the durations
    newArray[j].duration = 0; //fx: newArray[X: summed up duration]
    for (i = 0; i < array.length; i++) {
      if (array[i].activity === array[0].activity) {
        newArray[j].activity = array[i].activity;
        newArray[j].duration += array[i].duration;
      } else {
        anotherArray.push({}); // and in anotherArray[y,z,y,z]
        anotherArray[k].activity = array[i].activity;
        anotherArray[k].duration = array[i].duration;
        k++;
      }
    }
    j++;
    array = anotherArray; // once oneactivity with summed up duration
  } // is added to newArray and the rest of activities
  let temp_var = 0; // added to anotherArray, anotherArray is assigned to array to continue for the next activity
  let most_used_activity = "";
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
