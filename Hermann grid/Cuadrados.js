var ancho = 80;
var espacioH = 0
var espacioV = 0
var iniV = 0;
var iniH = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noLoop();
}

function draw() {
  //background(0); //Negro
  //backgroud(5, 13, 157); //Azul
  background(255) //Blanco
  iniH = width / 2 - 80 * 3 - 4 * 15;
  iniV = height * 0.1;
  squares();
}

function squares(){
  for(i = 0; i < 6; i += 1){
    espacioH = 0;
    for(j = 0; j < 6; j += 1){
      //fill(5, 13, 157); //Azul
      //fill(19, 139, 4); //Verde
      fill(0); //Negro
      rect( iniH + j * ancho + espacioH, iniV + i * ancho + espacioV, ancho, ancho);
      espacioH += 15;
    } 
    espacioV += 15;
  }
}