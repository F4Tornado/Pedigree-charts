function Person(gender, genotype, x, y, depth) {
  this.size = 20;
  this.gender = gender;
  this.genotype = genotype;
  this.phenotype = getPhenotype(this.genotype);
  if (this.phenotype == "dom") {
    this.color = color(51);
  } else {
    this.color = color(235);
  }
  this.x = x;
  this.y = y;
  this.textBox = createInput();
  this.depth = depth;
  this.married;
  // for (let i = 0; i < random([1, 2, 3, 4]); i++) {
  //   children.push = Person(random(["male", "female"]), random([color(51), color(235)]));
  // }
  this.show = () => {
    stroke(114, 168, 255);
    strokeWeight(2);
    line(this.x-3, this.y+40, this.x+18, this.y+40);
    stroke(255, 113, 224);
    line(this.x+this.size, this.y+(this.size/2), people[this.married].x+this.size, people[this.married].y+(this.size/2));
    if (gender === "male") {
      stroke(51);
      fill(this.color);
      rect(this.x, this.y, this.size, this.size);
    } else {
      ellipseMode(CORNER);
      stroke(51);
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
    this.textBox.position(this.x+5, this.y+30).elt.maxLength = 2;
    this.textBox.style("width", "20px").style("border","none").style("border-bottom","blue");
  }
}
