class Person {
  this.gender;
  this.color;
  this.children = [];
  this.x;
  this.y;
  constructor(gender, color, x, y) {
    this.gender = gender;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  show() {
    if (gender === "male") {
      stroke(51);
      fill(color);
      rect(this.x, this.y, 10, 10);
    } else {
      stroke(51);
      fill(color);
      ellipse(this.x, this.y, 10, 10);
    }
  }
}
