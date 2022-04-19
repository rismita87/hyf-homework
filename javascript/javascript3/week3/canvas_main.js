//Lets make some art using classes
//To follow the mouse - optional
const body = document.querySelector("body");
const myCanvasToDrawCircle = document.getElementById("canvasId");
let ctx = myCanvasToDrawCircle.getContext("2d");
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

myCanvasToDrawCircle.addEventListener("mousemove", function (event) {
  const bounds = myCanvasToDrawCircle.getBoundingClientRect(); //To get the correct canvas coordinate we
  let mouseX = event.clientX; // need to scale the mouse coordinates to
  let mouseY = event.clientY; //match the canvas resolution coordinates.
  mouseX /= bounds.width;
  mouseY /= bounds.height;
  mouseX *= myCanvasToDrawCircle.width;
  mouseY *= myCanvasToDrawCircle.height;

  const randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomR = Math.floor(Math.random() * 30);
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
