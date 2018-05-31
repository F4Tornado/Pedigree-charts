let peopleo = [];
let maxDepth = 3;
let times = 0;

function setup() {
  smooth();
  createCanvas(600, 600);
  peopleo.push(new Person("male", random(["AA", "Aa", "aa"]), 10, 10, maxDepth));
  peopleo.push(new Person("female", random(["AA", "Aa", "aa"]), 250, 10, maxDepth));
  peopleo.push(new Person("male", random(["AA", "Aa", "aa"]), 340, 10, maxDepth));
  peopleo.push(new Person("female", random(["AA", "Aa", "aa"]), 570, 10, maxDepth));
  peopleo[0].married = 1;
  peopleo[1].married = 0;
  peopleo[2].married = 3;
  peopleo[3].married = 2;
}

function draw() {
  fill(235);
  for (person of peopleo) {
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
