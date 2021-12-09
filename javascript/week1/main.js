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
