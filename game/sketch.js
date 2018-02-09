let people = [];

function setup() {
  smooth();
  createCanvas(600, 600)
  people.push(new Person("male", color(51), 10, 10));
  people.push(new Person("female", color(51), 50, 10));
  people.push(new Person("male", color(235), 100, 10));
  people.push(new Person("female", color(235), 150, 10));
}

function draw() {
  fill(235);
  for (person of people) {
    person.show();
  }
}
