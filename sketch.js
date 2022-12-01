let beef, croutons, cucumber, cranberry, ham, lettuce, pasta, pepper, pineapple, quinoa, tomato;
let beefImg;
let shape1;

function preload() {
  beef = loadSound('sounds/beef.edit.wav');
  croutons = loadSound('sounds/croutons.edit.wav');
  cucumber = loadSound('sounds/cucumber.edit.wav');
  cranberry = loadSound('sounds/driedcran.edit.wav');
  ham = loadSound('sounds/ham.edit.wav');
  lettuce = loadSound('sounds/lettuce.edit.wav');
  pasta = loadSound('sounds/pasta.edit.wav');
  pepper = loadSound('sounds/pepper.edit.wav');
  pineapple = loadSound('sounds/pinapple.edit.wav');
  quinoa = loadSound('sounds/quinoa.edit.wav');
  tomato = loadSound('sounds/tomato.edit.wav');

  beefImg = loadImage('images/deli-beef.jpg');
}

function setup() {
  createCanvas(600, 600);

  shape1 = new Draggable(100, 100, 100, 100);
}

function draw() {
  background(160, 136, 111);
  shape1.over();
  shape1.update();
  image(beefImg, shape1.x, shape1.y, shape1.w, shape1.h);
  shape1.show();
}

function mousePressed() {
  shape1.pressed();
}

function mouseReleased() {
  shape1.released();
}