function Person(gender, color, x, y) {
  this.size = 20;
  this.gender = gender;
  this.color = color;
  this.x = x;
  this.y = y;
  this.show = () => {
    if (gender === "male") {
      stroke(51);
      fill(color);
      rect(this.x, this.y, this.size, this.size);
    } else {
      stroke(51);
      fill(color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }
}
