//Lets make some art using classes
const body = document.querySelector("body");
const myCanvasToDrawCircle = document.getElementById("canvasId");
const ctx = myCanvasToDrawCircle.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.stroke();
    ctx.fill();
  }
}

function circle() {
  const randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomX = Math.floor(Math.random() * 1400);
  const randomY = Math.floor(Math.random() * 900);
  const randomR = Math.floor(Math.random() * 30);
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

let timerId = setInterval(() => {
  circle();
}, 100);
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 10000);
