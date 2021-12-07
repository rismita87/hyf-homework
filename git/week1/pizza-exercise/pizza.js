console.log("I love cheesepizza");
const myFavoritePizza = "cheesepizza";
const pizzaPrice = 100;
console.log("New Pizza Order:" + myFavoritePizza);
console.log("The price of the pizza is:" + pizzaPrice + "kr.");
const amountOfPizza = 4;
const familySizePizza = true;
console.log("amount of pizzas: " + amountOfPizza);
let totalPrice = pizzaPrice * amountOfPizza;
if (familySizePizza) {
  console.log("Is it family size pizza ?  Yes");
  totalPrice = 2 * pizzaPrice * amountOfPizza;
} else {
  console.log("Is it family size pizza ?  No");
  totalPrice = pizzaPrice * amountOfPizza;
}
console.log("Total price for your order is : " + totalPrice + "kr.");
