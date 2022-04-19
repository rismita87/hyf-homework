//Shopping cart using Classes
const body = document.querySelector("body");
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    fetch(
      `https://api.exchangerate.host/convert?from=DKK&to=${currency}&amount=${this.price}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(currency + `:` + responseData.result);
      });
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    // Implement functionality here
    const arrayOfProducts = [];
    //to search product by productName
    this.products.forEach((product) => {
      if (product.name === productName) {
        arrayOfProducts.push(product);
      }
    });
    //to check if there is no match,
    //else return the array with matching products
    if (arrayOfProducts.length < 1) {
      return "There is no matching product for '" + productName + "'";
    } else {
      return arrayOfProducts;
    }
  }

  getTotal() {
    // Implement functionality here
    let totalPrise = 0;
    this.products.forEach((product) => (totalPrise += product.price));
    totalPrise;
    const total = document.createElement("p");
    total.innerHTML = `<b>Total:</b> ${totalPrise}`;
    body.appendChild(total);
  }

  renderProducts() {
    const productTable = document.createElement("table");
    body.appendChild(productTable);
    const rowForHeading = document.createElement("tr");
    const nameheading = document.createElement("th");
    nameheading.innerHTML = `Product-name`;
    const priceheading = document.createElement("th");
    priceheading.innerHTML = `Price`;
    rowForHeading.append(nameheading, priceheading);
    productTable.appendChild(rowForHeading);

    this.products.forEach((product) => {
      const productRow = document.createElement("tr");
      const productName = document.createElement("td");
      productName.innerHTML = `${product.name}`;
      const productPrice = document.createElement("td");
      productPrice.innerHTML = `${product.price}`;
      productRow.append(productName, productPrice);
      productTable.appendChild(productRow);
    });
  }

  getUser(user) {
    // Implement functionality here
    const userNamePara = document.createElement("p");
    body.appendChild(userNamePara);
    fetch(" https://jsonplaceholder.typicode.com/users/" + user)
      .then((response) => response.json())
      .then((data) => {
        userNamePara.innerHTML = `<b>Username:</b> ${data.username}`;
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 8000);
const iPhone1 = new Product("iPhone", 3000);
const camera = new Product("camera", 2500);
const iPhone2 = new Product("iPhone", 4000);
const iPad = new Product("iPad", 2000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(iPhone1);
shoppingCart.addProduct(camera);
shoppingCart.addProduct(iPhone2);
shoppingCart.addProduct(iPad);
shoppingCart.removeProduct(flatscreen);
shoppingCart.getUser(6);
shoppingCart.renderProducts();
console.log("Total price: " + shoppingCart.getTotal());
console.log(shoppingCart);
console.log(shoppingCart.searchProduct("iPhone"));
console.log(shoppingCart.searchProduct("watch"));
const phone = new Product("plant", 50);
phone.convertToCurrency("INR");
