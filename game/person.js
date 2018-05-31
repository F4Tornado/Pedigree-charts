function Person(gender, genotype, x, y, depth, parent) {
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
  this.children = [];
  this.parenty = parent;
  this.show = () => {
    let shouldGetMarried = false;
    let parentoo;
    for (let i = 0; i < maxDepth-this.depth-1; i++) {
      parentoo = parent.parenty;
    }
    if (parentoo.getIndex() == 0) {
      
    }
    let people = peopleo;
    let married;
    if (this.depth == maxDepth) {
      married = people[this.married];
    } else if (this.depth <= maxDepth && this.depth >= 0) {
      whut = (deep) => {
        let parent = this;
        //get parent
        for (let i = 0; i < maxDepth-this.depth-1; i++) {
          parent = parent.parenty;
        }
        //get married parent
        let otherParent = peopleo[(parent.whutIndex()+2)%5];

        let married = otherParent;
        //get married
        for (let i = 0; i < maxDepth-this.depth-1; i++) {
          married = married.children[0];
        }

        times++;

        return married;
      }
      married = whut(this.depth);
    }
    if (this.married != undefined) {
      if (this.theirCombos == undefined && married.combos != undefined) {
        this.theirCombos = married.combos;
        if (this.gender == "male" && this.depth != 0) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              let num = parseInt(""+i+j, 2);
              let gender;
              if (num == 0) {
                gender = "male";
              } else if (num == 3) {
                gender = "female";
              } else {
                gender = random(["male", "female"]);
              }
              this.children.push(new Person(gender, this.mix(this.theirCombos[i], this.combos[i]), lerp(this.x+30, this.x+200, map(num, 0, 3, 0, 1)), this.y+50, this.depth-1), this);
            }
          }
        }
      }
    }
    for (child of this.children) {
      child.show()
    }
    stroke(114, 168, 255);
    strokeWeight(2);
    line(this.x-3, this.y+40, this.x+18, this.y+40);
    stroke(255, 113, 224);
    if (this.depth != maxDepth) {
      line(this.x+(this.size/2), this.y-(50-(this.size/2)), this.x+(this.size/2), this.y+(this.size/2));
    }
    if (this.married != undefined) {
      line(this.x+this.size, this.y+(this.size/2), married.x+this.size, people[this.married].y+(this.size/2));
    }
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
  this.thisCombos = () => {
    let thisCombos = [];
    for (let i = 0; i < 4; i++) {
      thisCombos.push(this.combo(this.genotype, i));
    }
    return thisCombos
  }
  this.marriedCombos = () => {

  }
  this.combo = (geno, ie) => {
    let i = ie.toString(2).split("");
    for (j = 0; j < geno.length / 2; j++) {
      if (i[j] == undefined) {
        i.unshift(0);
      } else {
        i[j] = parseInt(i[j], 10);
      }
    }
    let ret = "";
    for (let j = 0; j < geno.length / 2; j++) {
      ret += geno[(j * 2) + i[j]];
    }
    return ret;
  }
  this.mix = (gameteAA, gameteBB) => {
    let gameteA = gameteAA.split("");
    let gameteB = gameteBB.split("");
    let ret = "";
    for (let i = 0; i < gameteA.length; i++) {
      let add = "";
      let aUpper = gameteA[i].toUpperCase() == gameteA[i];
      let bUpper = gameteB[i].toUpperCase() == gameteB[i];
      if ((aUpper && bUpper) || (aUpper && !bUpper) || (!aUpper && !bUpper)) {
        add+=gameteA[i];
        add+=gameteB[i];
      } else if (!aUpper && bUpper) {
        add+=gameteB[i];
        add+=gameteA[i];
      }
      ret+=add;
    }
    return ret;
  }

  this.whutIndex = function() {
    if (this.depth == maxDepth) {
      for (let i = 0; i < peopleo.length; i++) {
        if (peopleo[i] == this) {
          return i;
        }
      }
    }
  }

  this.combos = this.thisCombos();
  this.theirCombos;
}
