/*1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.

onclick = function(){
  alert("Alert al clicar con el ratón");
}*/

/*2. Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento.

window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;
    document.getElementById('lbPosicion').innerHTML= 'Valor X '+x+'<br> Valor Y '+y;
}

*/

/*4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.

function tabla(){
  document.write("<table>");
  for(var i=0;i<25;i++){
    document.write("<tr>");
      for(var j=0;j<50;j++){ document.write("<td onmousemove='this.bgColor=tecla()''>1</td>"); }
    document.write("</tr>");
  }
  document.write("</table>");
}

function tecla(){
  if (event.shiftKey) {
    console.log("Hola1");
    return "red";
  }else if(event.ctrlKey ){
    console.log("Hola2");
    return "blue";
  }else{
    console.log("Hola3");
    return "";
  }
}

*/

/*5. Añade las siguientes funcionalidades al ejercicio anterior:
  ◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
  decidas)
  ◦ Borrar por completo el canvas (con un botón).


function tabla(){
  document.write("<table>");
  for(var i=0;i<25;i++){
    document.write("<tr>");
      for(var j=0;j<50;j++){ document.write("<td onmousemove='this.bgColor=tecla()''>1</td>"); }
    document.write("</tr>");
  }
  document.write("</table>");
}

function tecla(){
  if (event.shiftKey) {
    return "red";
  }else if(event.ctrlKey ){
    return "blue";
  }else if(event.altKey){
    location.reload();
  }else{
    return "";
  }
}

*/

/*9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).*/

ball.onmousedown = function(event) {
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  document.body.append(ball);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  
  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;

  };

};

ball.ondragstart = function() {
  return false;
};

/*10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/
