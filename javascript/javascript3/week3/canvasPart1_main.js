//Lets make some art using classes
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

function circle() {
  const randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomX = Math.floor(Math.random() * 300);
  const randomY = Math.floor(Math.random() * 200);
  const randomR = Math.floor(Math.random() * 25);
  let circle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColour
  );
  circle.draw();
}

setInterval(() => {
  circle();
}, 100);
