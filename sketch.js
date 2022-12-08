let beef, croutons, cucumber, cranberry, lettuce, pasta, pepper, pineapple, quinoa, tomato;
let beefImg, croutonsImg, cucumberImg, cranberryImg, lettuceImg, pastaImg, pepperImg, pineappleImg, quinoaImg, tomatoImg;
let beefIcon, croutonsIcon, cucumberIcon, cranberryIcon, pastaIcon, pepperIcon, pineappleIcon, quinoaIcon, tomatoIcon;
let beefPlaying, croutonsPlaying = false;
let bowl;

function preload() {
  beef = loadSound('sounds/beef.edit.wav');
  croutons = loadSound('sounds/croutons.edit.wav');
  cucumber = loadSound('sounds/cucumber.edit.wav');
  cranberry = loadSound('sounds/driedcran.edit.wav');
  lettuce = loadSound('sounds/lettuce.edit.wav');
  pasta = loadSound('sounds/pasta.edit.wav');
  pepper = loadSound('sounds/pepper.edit.wav');
  pineapple = loadSound('sounds/pinapple.edit.wav');
  quinoa = loadSound('sounds/quinoa.edit.wav');
  tomato = loadSound('sounds/tomato.edit.wav');

  bowl = loadImage('images/Bowl.png');

  beefImg = loadImage('images/Beef.png');
  croutonsImg = loadImage('images/Crouton.png');
  cucumberImg = loadImage('images/Cucumber.png');
  cranberryImg = loadImage('images/Cranberry.png');
  lettuceImg = loadImage('images/Lettuce.png');
  pastaImg = loadImage('images/Pasta.png');
  pepperImg = loadImage('images/Pepper.png');
  pineappleImg = loadImage('images/Pineapple.png');
  quinoaImg = loadImage('images/Quinoa.png');
  tomatoImg = loadImage('images/Tomato.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  beefIcon = new Draggable(100, 100, 200, 200, windowWidth, windowHeight);
  croutonsIcon = new Draggable(100, 200, 200, 200, windowWidth, windowHeight);
  cucumberIcon = new Draggable(100, 300, 200, 200, windowWidth, windowHeight);
  cranberryIcon = new Draggable(100, 400, 200, 200, windowWidth, windowHeight);
  lettuceIcon = new Draggable(100, 500, 200, 200, windowWidth, windowHeight);
  pastaIcon = new Draggable(300, 100, 200, 200, windowWidth, windowHeight);
  pepperIcon = new Draggable(300, 200, 200, 200, windowWidth, windowHeight);
  pineappleIcon = new Draggable(300, 300, 200, 200, windowWidth, windowHeight);
  quinoaIcon = new Draggable(300, 400, 200, 200, windowWidth, windowHeight);
  tomatoIcon = new Draggable(300, 500, 200, 200, windowWidth, windowHeight);
}

function draw() {
  background(160, 136, 111);

  beefIcon.over();
  beefIcon.update();
  let beefImgX = constrain(beefIcon.x, 0, width - beefIcon.w);
  let beefImgY = constrain(beefIcon.y, 0, height - beefIcon.h);
  image(beefImg, beefImgX, beefImgY - 50, 200, 300);
  beefIcon.show();

  croutonsIcon.over();
  croutonsIcon.update();
  let croutonsImgX = constrain(croutonsIcon.x, 0, width - croutonsIcon.w);
  let croutonsImgY = constrain(croutonsIcon.y, 0, height - croutonsIcon.h);
  image(croutonsImg, croutonsImgX, croutonsImgY - 50, 200, 300);
  croutonsIcon.show();

  cucumberIcon.over();
  cucumberIcon.update();
  let cucumberImgX = constrain(cucumberIcon.x, 0, width - cucumberIcon.w);
  let cucumberImgY = constrain(cucumberIcon.y, 0, height - cucumberIcon.h);
  image(cucumberImg, cucumberImgX, cucumberImgY - 50, 200, 300);
  cucumberIcon.show();

  cranberryIcon.over();
  cranberryIcon.update();
  let cranberryImgX = constrain(cranberryIcon.x, 0, width - cranberryIcon.w);
  let cranberryImgY = constrain(cranberryIcon.y, 0, height - cranberryIcon.h);
  image(cranberryImg, cranberryImgX, cranberryImgY - 50, 200, 300);
  cranberryIcon.show();

  lettuceIcon.over();
  lettuceIcon.update();
  let lettuceImgX = constrain(lettuceIcon.x, 0, width - lettuceIcon.w);
  let lettuceImgY = constrain(lettuceIcon.y, 0, height - lettuceIcon.h);
  image(lettuceImg, lettuceImgX, lettuceImgY - 40, 200, 300);
  lettuceIcon.show();

  pastaIcon.over();
  pastaIcon.update();
  let pastaImgX = constrain(pastaIcon.x, 0, width - lettuceIcon.w);
  let pastaImgY = constrain(pastaIcon.y, 0, height - lettuceIcon.h);
  image(pastaImg, pastaImgX - 20, pastaImgY - 50, 200, 300);
  pastaIcon.show();

  pepperIcon.over();
  pepperIcon.update();
  let pepperImgX = constrain(pepperIcon.x, 0, width - pepperIcon.w);
  let pepperImgY = constrain(pepperIcon.y, 0, height - pepperIcon.h);
  image(pepperImg, pepperImgX, pepperImgY - 50, 200, 300);
  pepperIcon.show();

  pineappleIcon.over();
  pineappleIcon.update();
  let pineappleImgX = constrain(pineappleIcon.x, 0, width - pineappleIcon.w);
  let pineappleImgY = constrain(pineappleIcon.y, 0, height - pineappleIcon.h);
  image(pineappleImg, pineappleImgX, pineappleImgY - 30, 200, 300);
  pineappleIcon.show();

  quinoaIcon.over();
  quinoaIcon.update();
  let quinoaImgX = constrain(quinoaIcon.x, 0, width - quinoaIcon.w);
  let quinoaImgY = constrain(quinoaIcon.y, 0, height - quinoaIcon.h);
  image(quinoaImg, quinoaImgX, quinoaImgY - 40, 200, 300);
  quinoaIcon.show();

  tomatoIcon.over();
  tomatoIcon.update();
  let tomatoImgX = constrain(tomatoIcon.x, 0, width - tomatoIcon.w);
  let tomatoImgY = constrain(tomatoIcon.y, 0, height - tomatoIcon.h);
  image(tomatoImg, tomatoImgX, tomatoImgY - 30, 200, 300);
  tomatoIcon.show();

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

  image(bowl, windowWidth/3, windowHeight/4, 600, 800);

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
  cucumberIcon.pressed();
  cranberryIcon.pressed();
  lettuceIcon.pressed();
  pastaIcon.pressed();
  pepperIcon.pressed();
  pineappleIcon.pressed();
  quinoaIcon.pressed();
  tomatoIcon.pressed();
}

function mouseReleased() {
  beefIcon.released();
  croutonsIcon.released();
  cucumberIcon.released();
  cranberryIcon.released();
  lettuceIcon.released();
  pastaIcon.released();
  pepperIcon.released();
  pineappleIcon.released();
  quinoaIcon.released();
  tomatoIcon.released();
}