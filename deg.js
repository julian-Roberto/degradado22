var lienzo = document.getElementById('lineal');
var papel1 = lienzo.getContext("2d");
var gato = new Image();
gato.src = "img/edv_esterilizadojunior@2x.png";
gato.addEventListener("load",dibujar);
function dibujar() {
    papel1.drawImage(gato, 0,0)
}

var lineal = papel1.createLinearGradient(0,0,640,640);///x1, y1, x2, y2
lineal.addColorStop(0.6, "purple");
lineal.addColorStop(0.5, "yellow");

papel1.fillStyle = lineal;
papel1.fillRect(0, 0, 640, 640);


/////canvaVR////

var lienzo = document.getElementById('VR');
var papel2 = lienzo.getContext("2d");
var perro = new Image();
perro.src = "img/mini_puppy_0.png";
perro.addEventListener("load",dibujar2);
function dibujar2() {
    papel2.drawImage(perro, 0,0)
}


var VR = papel2.createLinearGradient(0,0,360,480);///x1, y1, x2, y2
VR.addColorStop(0.5, "blue");
VR.addColorStop(0.3, "red");

papel2.fillStyle = VR;
papel2.fillRect(0, 0, 360, 480);

//////////*////////

var lienzo = document.getElementById("cr");
var papel3  = lienzo.getContext("2d");
var delfin = new Image(); 
delfin.src = "img/300px-Delfin-mular.png"
delfin.addEventListener('load',dibujar3);
function dibujar3() {
     papel3.drawImage(delfin, 50,80)
}

var cr = papel3.createRadialGradient(200,200,100,200,200,200);
cr.addColorStop(0.7, "blue");//porcentaje, color
cr.addColorStop(0.8, "#A2FF00");//porcentaje, color
cr.addColorStop(0.4, "#33FFA5");//porcentaje, color
papel3.fillStyle = cr;
papel3.fillRect(0, 0, 400, 400);

///////mover_der/(////)

