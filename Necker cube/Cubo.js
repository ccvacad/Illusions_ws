var ancho = 150;
var corrimiento = 50;
var pxb = 0;
var pyb = 0;
var pxf = 0;
var pyf = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pxb = width/2 - ancho/2;
  pyb = height/2 - ancho/2;
  pxf = width/2 - ancho/2 - corrimiento;
  pyf = height/2 - ancho/2 + corrimiento;
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(5)
  fill(46, 152, 50);
  rect(pxb, pyb, ancho, ancho);
  fill(255, 0);
  rect(pxf, pyf, ancho, ancho);
  line(pxb, pyb, pxf, pyf);
  line(pxb, pyb + ancho, pxf, pyf + ancho);
  line(pxb + ancho, pyb, pxf + ancho, pyf);
  line(pxb + ancho, pyb + ancho, pxf + ancho, pyf + ancho);
}