let beef, croutons, cucumber, cranberry, ham, lettuce, pasta, pepper, pineapple, quinoa, tomato;
let beefImg, croutonsImg;
let beefIcon, croutonsIcon;
let beefPlaying, croutonsPlaying = false;

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

  beefImg = loadImage('images/deli-beef.png');
  croutonsImg = loadImage('images/croutons.png');
}

function setup() {
  createCanvas(600, 600);

  beefIcon = new Draggable(100, 100, 100, 100);
  croutonsIcon = new Draggable(200, 200, 100, 100);
}

function draw() {
  background(160, 136, 111);

  stroke(0);
  strokeWeight(4);
  ellipse(width/2, height/2, 200);

  beefIcon.over();
  beefIcon.update();
  let beefImgX = constrain(beefIcon.x, 0, 600 - beefIcon.w);
  let beefImgY = constrain(beefIcon.y, 0, 600 - beefIcon.h);
  image(beefImg, beefImgX, beefImgY, beefIcon.w, beefIcon.h);
  beefIcon.show();

  croutonsIcon.over();
  croutonsIcon.update();
  let croutonsImgX = constrain(croutonsIcon.x, 0, 600 - croutonsIcon.w);
  let croutonsImgY = constrain(croutonsIcon.y, 0, 600 - croutonsIcon.h);
  image(croutonsImg, croutonsImgX, croutonsImgY, croutonsIcon.w, croutonsIcon.h);
  croutonsIcon.show();

  if (isInsideBowl(beefImgX, beefImgY)) {
    if (!beefPlaying) {
      beefPlaying = true;
      beef.loop();
    }
  } else {
    beefPlaying = false;   
    beef.stop();
  }

  if (isInsideBowl(croutonsImgX, croutonsImgY)) {
    if (!croutonsPlaying) {
      croutonsPlaying = true;
      croutons.loop();
    }
  } else {
    croutonsPlaying = false;   
    croutons.stop();
  }


}

function isInsideBowl(x, y) {
  if (x >= 200 && x <= 400 && y >= 200 && y <= 400) {
    return true;
  }
  return false;
}

function mousePressed() {
  beefIcon.pressed();
  croutonsIcon.pressed();
}

function mouseReleased() {
  beefIcon.released();
  croutonsIcon.released();
}