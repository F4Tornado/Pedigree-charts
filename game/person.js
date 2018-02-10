function Person(gender, color, x, y, depth, married) {
  this.size = 20;
  this.gender = gender;
  this.color = color;
  this.x = x;
  this.y = y;
  this.textBox = createInput();
  this.depth = depth;
  this.married = married;
  for (let i = 0; i < random([1, 2, 3, 4]); i++) {
    children.push = Person(random(["male", "female"]), )
  }
  this.show = () => {
    if (gender === "male") {
      stroke(51);
      fill(color);
      rect(this.x, this.y, this.size, this.size);
    } else {
      ellipseMode(CORNER);
      stroke(51);
      fill(color);
      ellipse(this.x, this.y, this.size, this.size);
    }
    this.textBox.position(this.x+5, this.y+30).elt.maxLength = 2;
    this.textBox.style("width", "20px").style("border","none").style("border-bottom","blue");
  }
}
