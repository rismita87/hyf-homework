// MOVIES EXERCISE

const listOfBadMovies = [];
const listOfBadMoviesSince2000 = [];
let promise = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
).then((response) => response.json());
//1. To creat an array of bad movies with rating < 4
promise
  .then((data) => {
    data.forEach((eachTitle) => {
      if (eachTitle.rating < 4) {
        listOfBadMovies.push(eachTitle.title);
      }
    });
  })
  .catch((err) => console.log(err));
//2. To creat an array of bad movies since year 2000
promise
  .then((element) => {
    element.forEach((eachMovie) => {
      if (eachMovie.rating < 4 && eachMovie.year >= 2000) {
        listOfBadMoviesSince2000.push(eachMovie.title);
      }
    });
  })
  .catch((err) => console.log(err));
console.log("The list of bad movies: ");
console.log(listOfBadMovies);
console.log("The list of bad movies since 2000: ");
console.log(listOfBadMoviesSince2000);

// PROMISE THAT RESOLVES AFTER SET TIME

async function promiseThatResolveAfterSetTime(resolveAfter) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(" ");
    }, resolveAfter * 1000);
  });
  let result = await promise;
  return result;
}
promiseThatResolveAfterSetTime(2)
  .then(() => {
    console.log("I am called asynchronously"); // logged out after 4 seconds
  })
  .catch(() => console.log("error"));

//REWRITING TIME

//Rewritting setTimeOut to Promise
function setTimeoutPromise(resolveAfterTime) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(" ");
    }, resolveAfterTime);
  });
}
setTimeoutPromise(4000)
  .then(() => {
    console.log("I am called after some seconds"); // logged out after 4 seconds
  })
  .catch(() => console.log("error"));

//Rewritting navigator.geolocation.getCurrentPosition to Promise
function getCurrentLocation() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

// FETCHING AND WAITING

//Using promises and .then.
let listOfAstronoutName = [];
let functionUsingPromises = fetch(
  "http://api.open-notify.org/astros.json"
).then((response) => response.json());

setTimeout(function () {
  functionUsingPromises
    .then((element) => {
      element.people.forEach((eachPeople) => {
        listOfAstronoutName.push(eachPeople.name);
      });
    })
    .catch(() => console.log("error"));
  console.log(listOfAstronoutName);
}, 3000);

// Using async/await
let listOfAstroName = [];
setTimeout(function () {
  const functionUsingAsyncAwait = (async function () {
    const data = await fetch("http://api.open-notify.org/astros.json");
    const result = await data.json();
    result.people.forEach((eachPeople) => {
      listOfAstroName.push(eachPeople.name);
    });
    return listOfAstroName;
  })();
  console.log(functionUsingAsyncAwait);
}, 3000);
