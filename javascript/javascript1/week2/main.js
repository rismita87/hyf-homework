//Step 3: Smart-ease - Goes Global!
//Flight booking fullname function

function getFullname(
  firstname = "FirstName",
  surname = "LastName",
  useformalName,
  woman
) {
  if (useformalName === true) {
    if (woman === true) {
      console.log('"Lady ' + firstname + " " + surname + '"');
    } else {
      console.log('"Lord ' + firstname + " " + surname + '"');
    }
  } else {
    if (firstname === " " || surname === " ") {
      firstname = "FirstName";
      surname = "LastName";
      console.log('"' + firstname + " " + surname + '"');
    } else {
      console.log('"' + firstname + " " + surname + '"');
    }
  }
}

const fullname1 = getFullname("Aaditri", "Sarkar", true, true);
const fullname2 = getFullname(" ");

//Event application
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todayNumber;
function today(day) {
  todayNumber = days.indexOf(day) + 1;
}

let eventday;
function eventWeekday(id) {
  switch (id) {
    case 1:
      eventday = "Sunday";
      break;
    case 2:
      eventday = "Monday";
      break;
    case 3:
      eventday = "Tuesday";
      break;
    case 4:
      eventday = "Wednesday";
      break;
    case 5:
      eventday = "Thursday";
      break;
    case 6:
      eventday = "Friday";
      break;
    case 7:
      eventday = "Saturday";
  }
  return eventday;
}

let eventDayWouldBe;
function getEventWeekday(eventdayNumber) {
  let dayNumber = eventdayNumber + todayNumber;
  if (dayNumber > 6) {
    eventDayWouldBe = dayNumber % 7;
    console.log("Event day will be " + eventWeekday(eventDayWouldBe));
  } else {
    eventDayWouldBe = dayNumber;
    console.log("Event day will be " + eventWeekday(eventDayWouldBe));
  }
}

today("Sunday");
getEventWeekday(8);

// Weather wear
function todaysTemperature(temperature) {
  if (temperature <= 0) {
    console.log("It might be snowing!! wear your snow jacket and snow boot.");
  } else if (temperature >= 1 && temperature < 6) {
    console.log("It's pretty cold!! get ready with winter wear.");
  } else if (temperature >= 6 && temperature < 18) {
    console.log(
      "It's not too cold not too hot, a light winter jacket would be fine."
    );
  } else {
    console.log(" It's pretty warm!! T-shirt and shorts would be perfect.");
  }
}
todaysTemperature(8);
