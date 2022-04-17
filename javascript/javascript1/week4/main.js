const nameList = [];
const listOfToDos = [];
function getReply(command) {
  const nameArray = [
    ["hello", "my", "name", "is"],
    ["what", "is", "my", "name"],
    ["add", "to", "my", "to-do"],
    ["remove", "from", "my", "to-do"],
    ["what", "is", "on", "my", "to-do"],
    ["what", "day", "is", "it", "today"],
    ["set", "a", "timer", "for", "seconds"],
  ];

  for (let i = 0; i < nameArray.length; i++) {
    const myArray = command.split(" ");
    let l = 0;
    for (let j = 0; j < nameArray[i].length; j++) {
      for (let k = 0; k < myArray.length; k++) {
        if (nameArray[i][j] === myArray[k]) {
          l += 1;
          myArray.splice(k, 1);
          k--;
        }
      }
    }
    //FOR "Hello, my name is Benjamin"
    if (l === nameArray[i].length && i === 0) {
      for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === myArray[0]) {
          return "your name already exists";
        }
      }
      nameList.push(myArray[0]);
      return "Nice to meet you " + myArray[0];
    }
    // FOR "What is my name?"
    if (l === nameArray[i].length && i === 1) {
      if (nameList[0] === undefined) {
        return "Mention your name first";
      } else {
        return nameList[0];
      }
    }
    //FOR "Add fishing to my todo" and "Add singing in the shower to my todo"
    if (l === nameArray[i].length && i === 2) {
      let toDo = "";
      for (let m = 0; m < myArray.length; m++) {
        if (m === 1 || m < myArray.length - 1) {
          toDo += myArray[m] + " ";
        } else {
          toDo += myArray[m];
        }
      }
      listOfToDos.push(toDo);
      return toDo + " added to your todo";
    }
    //FOR "Remove fishing from my todo"
    if (l === nameArray[i].length && i === 3) {
      const newlistOfToDos = [...listOfToDos];
      for (let i = 0; i < listOfToDos.length; i++) {
        if (listOfToDos[i] === myArray[0]) {
          newlistOfToDos.splice(i, 1);
          return (
            "Removed " +
            myArray[0] +
            " from your todo. The new list of todo is " +
            newlistOfToDos
          );
        }
      }
    }
    //FOR "What is on my todo?"
    if (l === nameArray[i].length && i === 4) {
      return "you have " + listOfToDos.length + " todos - " + listOfToDos;
    }
    //FOR "What day is it today?"
    if (l === nameArray[i].length && i === 5) {
      let today = new Date();
      return (
        today.toLocaleDateString("en-US", { day: "numeric" }) +
        ". of " +
        today.toLocaleDateString("en-US", { month: "long" }) +
        " " +
        today.toLocaleDateString("en-US", { year: "numeric" })
      );
    }
    // FOR "should be able to do simple math. fx what is 3 + 3 "
    if (!isNaN(myArray[2]) && !isNaN(myArray[4])) {
      if (myArray[3] === "+") {
        return myArray[2] + myArray[4];
      }
      if (myArray[3] === "-") {
        return myArray[2] - myArray[4];
      }
      if (myArray[3] === "*") {
        return myArray[2] * myArray[4];
      }
      if (myArray[3] === "/") {
        return myArray[2] / myArray[4];
      }
    }
    // FOR "Set a timer for 4 seconds"
    if (l === nameArray[i].length && i === 6) {
      const time = myArray[0] * 1000;
      setTimeout(myFunction, time);
      function myFunction() {
        alert("Timer done");
      }
      return "timer is set for " + myArray[0] + " seconds ";
    }
  }
}

console.log(getReply("hello my name is Benjamin"));
console.log(getReply("hello my name is Benjamin"));
console.log(getReply("what is my name"));
console.log(getReply("add fishing to my to-do"));
console.log(getReply("add singing in the shower to my to-do"));
console.log(getReply("remove fishing from my to-do"));
console.log(getReply("what is on my to-do"));
console.log(getReply("what day is it today"));
console.log(getReply("what is 4 / 200"));
console.log(getReply("set a timer for 4 seconds"));
