var teclas = {
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
};//una sola linea de código


var colorT = document.getElementById("colorcito");
var btn_gros = document.getElementById("btn");
var cuadrito = document.getElementById("area_de_dibujo");

var lienzo = cuadrito.getContext("2d");
var x, y, lapiz;
var ancho = cuadrito.width;
var xt = 5;
var yt = 5;

dibujarLinea("black", lapiz, 1, 1, 1, ancho - 1);//lateral izq
dibujarLinea("black", lapiz, 1, 1, ancho - 1, 1);//superior
dibujarLinea("black", lapiz, ancho - 1, 1, ancho - 1, ancho - 1);//lateral derecho
dibujarLinea("black", lapiz, 1, ancho - 31, ancho - 1, ancho - 31);//inferior

btn_gros.addEventListener("click", grosorLapiz);
document.addEventListener("keydown", dibujarTeclado);
cuadrito.addEventListener("mousemove", dibujarMouse);

function grosorLapiz()
{
    var grues = document.getElementById("grueso");
    lapiz = parseInt(grues.value);
}

function dibujarMouse(evento)
{
   //console.log(evento);
   if(evento.buttons == 1)
   {
       dibujarLinea(colorT.value, lapiz,  x, y, evento.layerX, evento.layerY);
       x = evento.layerX;
       y = evento.layerY;
    }
   else
   {
       x = evento.layerX;
       y = evento.layerY;
   } 
}

function dibujarTeclado(evento)
{
    var movimiento = lapiz;
   
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorT.value, lapiz, xt, yt, xt, yt - movimiento);
            yt = yt - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorT.value, lapiz, xt, yt, xt, yt + movimiento);
            yt = yt + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorT.value, lapiz, xt, yt, xt - movimiento, yt);
            xt = xt - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorT.value, lapiz, xt, yt, xt + movimiento, yt);
            xt = xt + movimiento;
        break;
        default:
            console.log("tecla invalida");
    }  
}

function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();//arranca trazo
    lienzo.strokeStyle = color;//color trazo
    lienzo.lineWidth=grosor;//ancho de linea en pixeles
    lienzo.moveTo(xinicial, yinicial);//donde inicia el trazo
    lienzo.lineTo(xfinal, yfinal);//donce finaliza el trazo
    lienzo.stroke();//realiza el trazo
    lienzo.closePath();//finaliza el trazo
}