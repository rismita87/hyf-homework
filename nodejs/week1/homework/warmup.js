console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log(new Circle(2).getDiameter());
console.log(new Circle(2).getCircumference());
console.log(new Circle(2).getArea());
