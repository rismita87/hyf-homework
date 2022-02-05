console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  console.log(products);
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    // product.shipsTo.forEach(
    //   (country) => (shipsToHTML += `<li>${country}</li>`)
    // );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    //console.log(li.innerHTML);

    productsUl.appendChild(li);
  });
}
console.log(products);

//To filter product based on product name
document
  .getElementById("productSelectionInputId")
  .addEventListener("input", myFunctionForProductName);

function myFunctionForProductName() {
  let inputValue = document.getElementById("productSelectionInputId").value;
  if (inputValue.length > 0) {
    productsUl.innerHTML = "";
    const filteredproducts = products.filter((product) =>
      product.name.toLowerCase().startsWith(inputValue)
    );
    renderProducts(filteredproducts);
  } else {
    productsUl.innerHTML = "";
  }
}

// To filter products by setting a maximum price limit
document
  .getElementById("maximumPriceLimitId")
  .addEventListener("input", myFunctionForPriceLimit);

function myFunctionForPriceLimit() {
  let inputPriceValue = document.getElementById("maximumPriceLimitId").value;
  if (inputPriceValue > 0) {
    productsUl.innerHTML = "";
    const filteredProductsByPrice = products.filter(
      (product) => product.price <= inputPriceValue
    );
    renderProducts(filteredProductsByPrice);
  } else {
    productsUl.innerHTML = "";
  }
}
//To filter product based on maximum rating
document
  .getElementById("start")
  .addEventListener("input", myFunctionForProductRating);

function myFunctionForProductRating() {
  let inputRatingValue = document.getElementById("start").value;
  if (inputRatingValue > 0) {
    productsUl.innerHTML = "";
    const filteredproductsByRating = products.filter(
      (product) => product.rating < inputRatingValue
    );
    renderProducts(filteredproductsByRating);
  } else {
    productsUl.innerHTML = "";
  }
}
