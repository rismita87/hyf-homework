//Step 3: Smart-ease - Goes Global!
//Flight booking fullname function

function getFullname(
  firstname = "FirstName",
  surname = "LastName",
  useformalName,
  female
) {
  if (useformalName === true) {
    if (female === true) {
      return '"Lady ' + firstname + " " + surname + '"';
    } else {
      return '"Lord ' + firstname + " " + surname + '"';
    }
  } else {
    if (firstname === " " || surname === " ") {
      firstname = "FirstName";
      surname = "LastName";
      return '"' + firstname + " " + surname + '"';
    } else {
      return '"' + firstname + " " + surname + '"';
    }
  }
}

const fullname1 = console.log(getFullname("Aaditri", "Sarkar", true, true));
const fullname2 = console.log(getFullname(" "));

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

function getEventWeekday(eventdayNumber) {
  let remainder = eventdayNumber % 7;
  let eventDay;
  if (day + remainder < days.length) {
    eventDay = day + remainder;
    return eventDay;
  } else {
    eventDay = day + remainder - 7;
    return eventDay;
  }
}
var today = new Date();
var day = today.getDay();
console.log("Today is " + days[day]);
console.log("Event day will be " + days[getEventWeekday(7)]);

// Weather wear

function todaysTemperature(temperature) {
  if (temperature <= 0) {
    return "It might be snowing!! wear your snow jacket and snow boot.";
  } else if (temperature >= 1 && temperature < 6) {
    return "It's pretty cold!! get ready with winter wear.";
  } else if (temperature >= 6 && temperature < 18) {
    return "It's not too cold not too hot, a light winter jacket would be fine.";
  } else {
    return " It's pretty warm!! T-shirt and shorts would be perfect.";
  }
}
console.log(todaysTemperature(20));

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
        return class07Students;
      } else {
        return "Cannot add more students to class 07";
      }
    } else {
      class07Students.push(studentName);
      return class07Students;
    }
  }
}

console.log(addStudentToClass("Rismita"));
console.log(addStudentToClass("Rismita"));
console.log(addStudentToClass("Abhirup"));
console.log(addStudentToClass("Aaditri"));
console.log(addStudentToClass("Amrita"));
console.log(addStudentToClass("Neo"));
console.log(addStudentToClass("Neo"));
console.log(addStudentToClass("Leo"));
console.log(addStudentToClass("Sudip"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Uma"));

function getNumberOfStudents() {
  let studentStrength = class07Students.length;
  return studentStrength;
}
console.log(getNumberOfStudents());

//Candy helper

var boughtCandyPrices = [];
var amountToSpend = Math.random() * 100;
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
  console.log("Total bought candy price: " + totalBoughtCandyPrices);
  if (totalBoughtCandyPrices < amountToSpend) {
    return "You can buy more, so please do!";
  } else {
    return "Enough candy for you!";
  }
}

addcandy("Sweet", 20);
console.log(canBuyMoreCandy());
addcandy("Chocolate", 10);
console.log(canBuyMoreCandy());
