let people = [];
let maxDepth = 4;

function setup() {
  smooth();
  createCanvas(600, 600);
  people.push(new Person("male", random(["AA", "Aa", "aa"]), 10, 10, maxDepth));
  people.push(new Person("female", random(["AA", "Aa", "aa"]), 250, 10, maxDepth));
  people.push(new Person("male", random(["AA", "Aa", "aa"]), 340, 10, maxDepth));
  people.push(new Person("female", random(["AA", "Aa", "aa"]), 570, 10, maxDepth));
  people[0].married = 1;
  people[1].married = 0;
  people[2].married = 3;
  people[3].married = 2;
}

function draw() {
  fill(235);
  for (person of people) {
    person.show();
  }
}

const getPhenotype = function(genotype) {
  if (genotype.toLowerCase() == genotype) {
    return "rec";
  } else {
    return "dom";
  }
}

// const scribbleRect = (x, y, w, h) => {
//   scribble.scribbleRect(x, y, w, h);
// }
//
// const scribbleEllipse = (x, y, w, h) => {
//   scribble.scribbleRect(x, y, w, h);
// }
//
// const scribbleLine = (x1, y1, x2, y2) => {
//   scribble.scribbleLine(x1, y1, x2, y2);
// }
