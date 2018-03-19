var BigCircleX, BigCircleY, BigCircleD, BigCircleR, BigCircleDeg;
var LineX, LineY, LineD, LineR, LineDeg;
var PtX, PtY, PtD, PtR, PtDeg, PtStrokeWeight;
var speed, numLines;

var keyPress = false;


function setup() {
  createCanvas(windowWidth,windowHeight);
  numLines = 6;    
  speed = 500;     

  BigCircleX = width/2;
  BigCircleY = height/2;
  BigCircleD = 300-10;
  BigCircleR = BigCircleD/2;

  LineX = LineY = LineDeg = 0;

  PtStrokeWeight = 30;
  PtX = PtY = PtDeg = 0;
  frameRate(speed);
}

function draw() {
  background(255);
  
  PtDeg = (PtDeg + 1) %360;  
  
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(BigCircleX, BigCircleY, BigCircleD, BigCircleD);

  if (keyPress) {
    drawLines();
  }
  drawPoints();  
}

function drawPoints() {
  strokeWeight(30);
  stroke(255);

  for (l = 0; l < numLines; l++) {
    LineX = (BigCircleR-PtStrokeWeight/2-1)*cos(radians(LineDeg+l*180/numLines));
    LineY = (BigCircleR-PtStrokeWeight/2-1)*sin(radians(LineDeg+l*180/numLines));

    point(BigCircleX+LineX*sin(radians(PtDeg+l*180/numLines)), BigCircleY+LineY*sin(radians(PtDeg+l*180/numLines)));
  } 
}


function drawLines() {
  stroke(0);
  strokeWeight(2);

  for (l = 0; l < numLines; l++) {
    LineX = BigCircleR*cos(radians(LineDeg + l*180/numLines));
    LineY = BigCircleR*sin(radians(LineDeg + l*180/numLines));

    line(BigCircleX-LineX, BigCircleY-LineY, BigCircleX+LineX, BigCircleY+LineY);
  }
}

function keyPressed(){
  if(keyPress){
    keyPress = false;
  }
  else{
    keyPress = true; 
  }
}