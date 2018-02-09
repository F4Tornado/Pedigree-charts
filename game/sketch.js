let people = [];

function setup() {
  createCanvas(600, 600);
  people.push(new person("male", color(51), 10, 10))
}

function draw() {
  fill(235);
  for (person of people) {
    person.show();
  }
}
