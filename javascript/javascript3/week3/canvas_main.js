//Lets make some art using classes
//To follow the mouse - optional
const body = document.querySelector("body");
const myCanvasToDrawCircle = document.getElementById("canvasId");
const ctx = myCanvasToDrawCircle.getContext("2d");
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fillStyle = fillColor;
  }
  draw() {
    ctx.stroke();
    ctx.fill();
  }
}

document
  .getElementById("canvasId")
  .addEventListener("mousemove", function (event) {
    const bounds = myCanvasToDrawCircle.getBoundingClientRect(); //To get the correct canvas coordinate we
    let mouseX = event.clientX; // need to scale the mouse coordinates to
    let mouseY = event.clientY; //match the canvas resolution coordinates.
    mouseX /= bounds.width;
    mouseY /= bounds.height;
    mouseX *= myCanvasToDrawCircle.width;
    mouseY *= myCanvasToDrawCircle.height;

    const randomColour =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomR = Math.floor(Math.random() * 25);
    console.log("X: " + event.clientX + "Y: " + event.clientY);
    let circle = new Circle(
      mouseX,
      mouseY,
      randomR,
      0,
      2 * Math.PI,
      randomColour
    );
    circle.draw();
  });
