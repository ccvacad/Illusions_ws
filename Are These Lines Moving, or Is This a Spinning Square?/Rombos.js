var keyPress = true;

var line1X = 0, line1Y = 0;//Left - Up
var line2X = 0, line2Y = 0;//Down - Rigth
var line3X = 0, line3Y = 0;//Up - Rigth
var line4X = 0, line4Y = 0;//left - Down
var max = 0, min = 0;
var canW = 0, canH = 0;

var swi = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  positionLine();
  min = line1X - 25;
  max = line1X + 25;
  canW = width;
  canH = height;
  smooth();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  if(canW != width || canH != height){
    positionLine();
    canW = width;
    canH = height;
  }
  
  switchDirection();
  movingRect(line1X, line1Y, 45);
  movingRect(line2X, line2Y, 45);
  movingRect(line3X, line3Y, 135);
  movingRect(line4X, line4Y, 135);
  
  if (keyPress) {
    drawRectangle(width / 2 - 180, height / 2);//Left
    drawRectangle(width / 2 + 180, height / 2);//Rigth
    drawRectangle(width / 2, height / 2 - 180 );//Up
    drawRectangle(width / 2, height / 2 + 180 );//Down
  }
}

function positionLine(){
  line1X = width / 2 - 90;
  line1Y = height / 2 - 90;
  line2X = width / 2 + 90;
  line2Y = height / 2 + 90;
  line3X = width / 2 + 90;
  line3Y = height / 2 - 90;
  line4X = width / 2 - 90;
  line4Y = height / 2 + 90;
}

function movingRect(x, y,angle) {
  push();
  fill(255);
  translate(x, y);
  rotate(radians(angle));
  rect(0, 0, 6, 185);
  pop();
}

function switchDirection() {
  if (line1X == max) {
    swi = false;
  }
  else if (line1X == min) {
    swi = true;
  }

  if (swi) {
    line1X++; line1Y++; line2X++; line2Y++; line3X++; line3Y--; line4X++; line4Y--;
  } else {
    line1X--; line1Y--; line2X--; line2Y--; line3X--; line3Y++; line4X--; line4Y++;
  }
}

function drawRectangle(x, y) {
  push();
  fill(5, 13, 157);
  translate(x, y);
  rotate(radians(45));
  rect(0, 0, 100, 100);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(keyPress){
    keyPress = false;
  }
  else{
    keyPress = true; 
  }
}