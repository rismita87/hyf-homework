//1. Programming Basics
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
// Using the dishes array. Loop through the array using afor loop.Log out all the dishes.
// This should be the log:
// Spaghetti
// Lasagne
// Beans on toast
// Porridge
// Tomato soup

for (i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

//2. DOM manipulation
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked:
// -Insert an h1 tag with the text “Javascript test”
// -Change the background color of the body

const body = document.querySelector("body");
document.body.style.backgroundColor = "red";
const button = document.createElement("button");
button.innerHTML = "click";
body.appendChild(button);
button.addEventListener("click", function () {
  document.getElementById("headingId").innerHTML = "Javascript test";
});

// 3. Async API calls
// Make an API call using the Fetch API. Make use of the following API:
// https://reqres.in/api/users
// Display the first_name of the first three users in the DOM
const myFunction = (async function getFirstName() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  for (i = 0; i < 3; i++) {
    console.log(data.data[i].first_name);
  }
})();
console.log("first 3 names");
myFunction;

// 4. Class
// Create a class called “Person”. The constructor should have 1 parameter called
// firstname. It should have 1 method called sayHello that should log: 'Hello my name is
// FIRSTNAME'
// Here is an example:
// const peter = new Person('peter');
//peter.sayHello(); // 'Hello my name is Peter'

class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }
  sayHello() {
    return "'Hello my name is '" + this.firstname + " ";
  }
}
const peter = new Person("peter");
console.log(peter.sayHello());
