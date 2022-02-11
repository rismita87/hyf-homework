// warm up excersises

//1.Log out the text Called after 2.5 seconds.
setTimeout(() => console.log("called after 2.5 second"), 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
function timeOutFunction(delay, stringToLog) {
  setTimeout(() => console.log(stringToLog), delay * 1000);
}
timeOutFunction(3, "this string logged after 3 seconds");
timeOutFunction(6, "this string logged after 6 seconds");
timeOutFunction(2, "this string logged after 2 seconds");

//3.Create a button in html. When clicking this button,
//use the function you created in the previous task to log out the
//text: Called after 5 seconds 5 seconds after the button is clicked.
const body = document.querySelector("body");
const myButton = document.createElement("button");
myButton.innerText = "click me";
body.appendChild(myButton);
myButton.addEventListener("click", newTimeOutFunction);
function newTimeOutFunction() {
  setTimeout(() => console.log("this string logged after 5 seconds"), 5000);
}

//4.Two functions are created and assigned to two different variables.
//One function logs out Earth, the other function logs out Saturn.
//a new third function is created that has one parameter: planetLogFunction.
//the third function calls the provided parameter function.
// Try call the third function once with the Earth function and once
//with the Saturn function.
function earthLogger() {
  console.log("earth");
}
function saturnLogger() {
  console.log("saturn");
}
function planetLogFunction(parameter) {
  parameter();
}
planetLogFunction(saturnLogger);

//5. and 6.
//Created a button with the text called "Log location".
//When this button is clicked the location (latitude, longitude)
// of the user is logged out using this browser api and
//shows that location on a map using fx the Google maps api

const logLocationButton = document.createElement("button");
logLocationButton.innerText = "log location";
//const body = document.querySelector("body");
body.appendChild(logLocationButton);
var userLng = 0;
var userLat = 0;
const latitutePara = document.createElement("p");
const longitutePara = document.createElement("p");
body.appendChild(latitutePara);
body.appendChild(longitutePara);
logLocationButton.addEventListener("click", logLocationFunction);

function logLocationFunction() {
  navigator.geolocation.getCurrentPosition(
    (success) => (
      (latitutePara.innerHTML = `This is the latitude: ${success.coords.latitude}`),
      (longitutePara.innerHTML = `This is the longitude: ${success.coords.longitude}`),
      initMap(success.coords.latitude, success.coords.longitude)
    )
  );
  (error) => console.log(error);
}

function initMap(userLat, userLng) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(userLat, userLng),
    zoom: 8,
  });

  const trexMarker = new google.maps.Marker({
    position: new google.maps.LatLng(userLat, userLng),
    map: map,
    title: "Stan the T-Rex",
  });
}

//7.
//const body = document.querySelector("body");
const delayedLogPara = document.createElement("p");
body.appendChild(delayedLogPara);
function runAfterDelay(delay, callback) {
  setTimeout(() => console.log(callback), delay * 1000);
}
runAfterDelay(4, "Should be logged after 4 seconds");
runAfterDelay(2, "Should be logged after 2 seconds");
runAfterDelay(3, "Should be logged after 3 seconds");
runAfterDelay(1, "Should be logged after 1 seconds");
//8.

document.body.addEventListener("dblclick", function () {
  document.getElementById("paraId").innerHTML = "double-click !";
});

//9.
function jokeCreator(shouldTellFunnyJoke = true, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    console.log(funnyJoke());
  } else {
    console.log(badJoke());
  }
}
function funnyJoke() {
  return "This is funny joke!!";
}
function badJoke() {
  return "This is bad joke!!";
}

//FUNCTION AS A VERIABLE

//Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.
const arrayWith3Items = [
  function firstFunction() {
    return "first function";
  },
  function firstFunction() {
    return "second function";
  },
  function firstFunction() {
    return "third function";
  },
].forEach((element) => console.log(element()));

//Create a function as a const and try creating a function normally.
// Call both functions
const constFunction = function () {
  return "This is a function as a const!!";
};
console.log(constFunction());
function normalFunction() {
  return "This is a normal function!!";
}
console.log(normalFunction());

//Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
  funcKey: function () {
    return "Hello World!";
  },
};
console.log(myObject.funcKey());
