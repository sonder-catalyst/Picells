//need to add a background track

let input;
let volume;
let myPixels = [];


function setup() {
  createCanvas(400, 400);
  //to set up the mic input
 // input = new p5.AudioIn();
 // input.start();
  myPixels.push(new CatalystPixel());
}

function draw() {
  //background(0);
  //translate(width/2, height/2);
  
  //'get the current level'
  volume = input.getLevel();
  console.log(volume);

  // trigger pixel generation)
  if (volume > 0.11) {

    myPixels.push(new CatalystPixel());
  }

  for (let i = 0; i < myPixels.length; i++) {

    myPixels[i].display();
    
// I added this for now cos it looks cool; creates a different "meaning" and thought trails...
  translate(p5.Vector.fromAngle(millis() / 1000, 10));

  }
//how do I make it (them) to grow? I don't even know where to begin causing them to "split" in two, so I need a way to have them draw out from the center
  
  
  //mapping the current level into a useful range
  //let inVal = map(volume, 0, 0.3, 0, 400);
  //letcolorVal = map(volume, 0, 0.3, 0, 255);
  // ellipse (0,0, inVal);
}

function CatalystPixel() {

  this.x = random(width);
  this.y = random(height);
  this.color = color(180, 235, 245);
  this.size = 1;


  this.display = function() {

    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

}