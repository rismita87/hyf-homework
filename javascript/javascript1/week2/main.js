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

// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  let i = 0;
  for (; i < class07Students.length; i++) {
    if (studentName === class07Students[i]) {
      console.log("Student " + studentName + " is already in the class.");
      break;
    } else {
      continue;
    }
  }
  if (i === class07Students.length) {
    if (class07Students.length > 5) {
      if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log(class07Students);
      } else {
        console.log("Cannot add more students to class 07");
      }
    } else {
      class07Students.push(studentName);
      console.log(class07Students);
    }
  }
}

addStudentToClass("Rismita");
addStudentToClass("Rismita");
addStudentToClass("Abhirup");
addStudentToClass("Aaditri");
addStudentToClass("Amrita");
addStudentToClass("Neo");
addStudentToClass("Neo");
addStudentToClass("Leo");
addStudentToClass("Sudip");
addStudentToClass("Queen");
addStudentToClass("Uma");

function getNumberOfStudents() {
  let studentStrength = class07Students.length;
  console.log(studentStrength);
}
getNumberOfStudents();

//Candy helper

let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
console.log("Amount to spend: " + amountToSpend);

function addcandy(candyType, weight) {
  switch (candyType) {
    case "Sweet":
      boughtCandyPrices.push(weight * 0.5);
      break;
    case "Chocolate":
      boughtCandyPrices.push(weight * 0.7);
      break;
    case "Tofee":
      boughtCandyPrices.push(weight * 1.1);
      break;
    case "Chewing-gum":
      boughtCandyPrices.push(weight * 0.03);
      break;
  }
}
function canBuyMoreCandy() {
  let totalBoughtCandyPrices = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalBoughtCandyPrices = totalBoughtCandyPrices + boughtCandyPrices[i];
  }
  console.log("Total amount: " + totalBoughtCandyPrices);
  if (totalBoughtCandyPrices < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

addcandy("Sweet", 20);
canBuyMoreCandy();
addcandy("Chocolate", 10);
canBuyMoreCandy();
