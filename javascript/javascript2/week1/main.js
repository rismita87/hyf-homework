//Finds the shortest word
function getShortestWord(parameter) {
  let word = parameter[0];
  for (let l = 0; l < parameter.length; l++) {
    if (word.length > parameter[l].length) {
      word = parameter[l];
    }
  }
  return "shortest word is '" + word + "'";
}

//Finds danish letter count
function getDanishLetterCount(parameter) {
  let total = 0;
  let myList = [];
  for (let i = 0; i < myArray.length; i++) {
    let k = 0;
    for (let j = 0; j < parameter.length; j++) {
      if (myArray[i] === parameter[j]) {
        k += 1;
      }
    }
    if (k > 0) {
      myList.push({ [myArray[i]]: k });
      total += k;
    }
  }
  myList.unshift({ Total: total });
  return myList;
}

const danishWords = ["bil1111", "plante", "kaffe", "bog", "ø", "planetarium"];
const danishString = "Jeg hør en blå bil";
const danishString2 = "Blå grød med røde bær";
const myArray = ["å", "ø", "æ"];
console.log(getShortestWord(danishWords));
console.log(getDanishLetterCount(danishString));
console.log(getDanishLetterCount(danishString2));

//Spirit animal name generator
const body = document.querySelector("body");
const myButton = document.querySelector("button");
myButton.innerText = "click here";
const spiritAnimalArray = [
  "The confident bear",
  "The leading lion",
  "The strong willed tiger",
  "The clever fox",
  "The loyal wolf",
  "The peaceful panda",
  "The crying butterfly",
  "The wise horse",
  "The compationate deer",
  "The patient eagle",
];
let newSpiritAnimalArray = [...spiritAnimalArray];
function getInputValue() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue) {
    const randomAnimal = Math.floor(Math.random() * spiritAnimalArray.length);
    document.getElementById("displayPara").innerHTML =
      "<b>Name: </b>" +
      inputValue +
      ": " +
      inputValue +
      " - " +
      spiritAnimalArray[randomAnimal];
    document.getElementById("firstSelection").disabled = true;
    newSpiritAnimalArray.splice([randomAnimal], 1);
  } else {
    document.getElementById("displayPara").innerHTML = " Enter your name first";
  }
}

function getNewInputValue() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue) {
    const newRandomAnimal = Math.floor(
      Math.random() * newSpiritAnimalArray.length
    );
    document.getElementById("displayPara").innerHTML =
      "<b>Name: </b>" +
      inputValue +
      ": " +
      inputValue +
      " - " +
      newSpiritAnimalArray[newRandomAnimal];
  } else {
    document.getElementById("displayPara").innerHTML = " Enter your name first";
  }
}
