//VISUAL PROMISE

// Function to calculate how much each element needs to be moved in x/y directions.
function modifyCordinate(currentbox, coordinateObj) {
  const currentX = currentbox.style.left;
  const currentY = currentbox.style.top;
  coordinateObj.x =
    parseInt(coordinateObj.x) - parseInt(currentX.replace(/px/, ""));
  coordinateObj.y =
    parseInt(coordinateObj.y) - parseInt(currentY.replace(/px/, ""));
  return coordinateObj;
}
//Visual Promise to translate one by one:
function translateOneByOne() {
  moveElement(
    document.querySelector("li:nth-child(1)"),
    modifyCordinate(document.querySelector("ul.marks li:nth-child(1)"), {
      x: 20,
      y: 300,
    })
  )
    .then(() => {
      console.log(" 1st Element has been moved");
    })
    .then(() =>
      moveElement(
        document.querySelector("li:nth-child(2)"),
        modifyCordinate(document.querySelector("ul.marks li:nth-child(2)"), {
          x: 400,
          y: 300,
        })
      ).then(() => {
        console.log("2nd Element has been moved");
      })
    )
    .then(() =>
      moveElement(
        document.querySelector("li:nth-child(3)"),
        modifyCordinate(document.querySelector("ul.marks li:nth-child(3)"), {
          x: 400,
          y: 20,
        })
      ).then(() => {
        console.log("3rd Element has been moved");
      })
    );
}
//translateOneByOne();
//Visual Promise to translate all at once:
function translateAllAtOnce() {
  Promise.all([
    moveElement(
      document.querySelector("li:nth-child(1)"),
      modifyCordinate(document.querySelector("ul.marks li:nth-child(1)"), {
        x: 20,
        y: 300,
      })
    ).then(() => {
      console.log(" 1st Element has been moved");
    }),
    moveElement(
      document.querySelector("li:nth-child(2)"),
      modifyCordinate(document.querySelector("ul.marks li:nth-child(2)"), {
        x: 400,
        y: 300,
      })
    ).then(() => {
      console.log("2nd Element has been moved");
    }),
    moveElement(
      document.querySelector("li:nth-child(3)"),
      modifyCordinate(document.querySelector("ul.marks li:nth-child(3)"), {
        x: 400,
        y: 20,
      })
    ).then(() => {
      console.log("3rd Element has been moved");
    }),
  ]);
}
translateAllAtOnce();
