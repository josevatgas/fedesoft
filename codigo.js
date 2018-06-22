var numero1=5;
var numero2=7;
var resultado=0;

function suma_y_muestra() {
  resultado = numero1 + numero2;
  //alert("El resultado es " + resultado);
}

suma_y_muestra();

numero1 = 10;
numero2 = 7;
 
suma_y_muestra();
 
numero1 = 5;
numero2 = 8;
 
suma_y_muestra();


function suma_y_muestra2(primerNumero, segundoNumero) { 
	resultado = primerNumero + segundoNumero;
    //alert("El resultado es " + resultado);
}


suma_y_muestra2(1,2);



function calculaPrecioTotal(precio) {
  var impuestos = 1.16;
  var gastosEnvio = 10;
  var precioTotal = ( precio * impuestos ) + gastosEnvio;
  
  return precioTotal;
}



//var precioTotal2 = calculaPrecioTotal(23.34);
//alert("El precio total es:"+ precioTotal2);


function calculaPrecioTotal2(precio, porcentajeImpuestos) {
  var gastosEnvio = 10;
  var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
  var precioTotal = precioConImpuestos + gastosEnvio;
  return precioTotal;
}

function calculaPrecioTotal3(precio, porcentajeImpuestos) {
  var gastosEnvio = 10;
  var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
  var precioTotal = precioConImpuestos + gastosEnvio;
  return precioTotal.toFixed(2);
}


var precioTotal = calculaPrecioTotal2(23.34, 16);
var otroPrecioTotal = calculaPrecioTotal3(23.34, 16);
//alert(precioTotal + "aasdasd"+ otroPrecioTotal);


function creaMensaje() {
  var mensaje = "Mensaje de prueba";
  alert(mensaje);
}
//creaMensaje();


var mensaje2 = "Mensaje de prueba2";
 
function muestraMensaje2() {
  alert(mensaje2);
}

//muestraMensaje2();

function creaMensaje() {
  mensaje = "Mensaje de prueba3";
}
 
creaMensaje();
//alert(mensaje);

var mensaje3 = "gana la de fuera";
 
function muestraMensaje() {
  var mensaje3 = "gana la de dentro";
  alert(mensaje3);
}
 
alert(mensaje3);
muestraMensaje();
alert(mensaje3);


function pruebaForBreak(){
	var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    break;
  }
  else {
    resultado += letras[i];
  }
}
alert(resultado);

}


//pruebaForBreak();

function pruebaForBreak2(){
	var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    continue;
  }
  else {
    resultado += letras[i];
  }
}
alert(resultado);

}

pruebaForBreak2();
