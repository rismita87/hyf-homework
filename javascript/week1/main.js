// Age-ify (A future age calculator)
let yearOfBirth = 1988; // it can change so "let" variable
const yearFuture = 2027; // as the future year given so "const" variable
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old on " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2017; // in human years and as it can change so "let" variable
const dogYearFuture = 2027; // as the future year given so "const" variable
let dogYear;
let shouldShowResultInDogYears = false; //boolean type variable.
if (shouldShowResultInDogYears) {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  dogYear = dogYearFuture - dogYearOfBirth;
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}

//Housey pricey (A house price estimator)

let houseDimentions = []; // to include house dimentions as array elements
let volumeInM3; // parameter to calculate housevolume in meter3
let housePrice; // calculated house price using given formula
let houseCosts; // offered house price

// for Peter's house
houseDimentions = [10, 8, 10, 100]; // house's dimentions in order height, width & depth in meters and garden size in meters2
volumeInM3 = houseDimentions[0] * houseDimentions[1] * houseDimentions[2];
housePrice = volumeInM3 * 2.5 * 1000 + houseDimentions[3] * 300;
houseCosts = 2500000;
if (housePrice > houseCosts) {
  console.log("Peter is paying too little for the house.");
} else if (housePrice < houseCosts) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying proper price for the house."); // when housePrice equals to houseCosts
}
// for Julia's house
houseDimentions = [8, 5, 11, 70]; // house's dimentions in order height, width & depth in meters and garden size in meters2
volumeInM3 = houseDimentions[0] * houseDimentions[1] * houseDimentions[2];
housePrice = volumeInM3 * 2.5 * 1000 + houseDimentions[3] * 300;
houseCosts = 1000000;
if (housePrice > houseCosts) {
  console.log("Julia is paying too little for the house.");
} else if (housePrice < houseCosts) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is paying proper price for the house."); // when housePrice equals to houseCosts
}
