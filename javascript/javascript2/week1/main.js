//Find the shortest word
function notThisFunctionName(parameter) {
  if (Array.isArray(parameter)) {
    let word = parameter[0];
    for (let l = 0; l < parameter.length; l++) {
      if (word.length > parameter[l].length) {
        word = parameter[l];
      }
    }
    return "shortest word is '" + word + "'";
  } else {
    //Find and count the Danish letters
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
}
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const danishString = "Jeg hør en blå bil";
const danishString2 = "Blå grød med røde bær";
const myArray = ["å", "ø", "æ"];
console.log(notThisFunctionName(danishWords));
console.log(notThisFunctionName(danishString));
console.log(notThisFunctionName(danishString2));
