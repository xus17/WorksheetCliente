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
En el body hay que poner onload="tabla()"

function tabla(){
  document.write("<table>");
  for(var i=0;i<25;i++){
    document.write("<tr>");
      for(var j=0;j<50;j++){ document.write("<td onmousemove='tecla(event)'>1</td>"); }
    document.write("</tr>");
  }
  document.write("</table>");
}

function tecla(evento){
  if (evento.shiftKey) {
    evento.target.style.backgroundColor="blue";
  }else if(evento.ctrlKey ){
    evento.target.style.backgroundColor="red";
  }
}

*/

/*5. Añade las siguientes funcionalidades al ejercicio anterior:
  ◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
  decidas)
  ◦ Borrar por completo el canvas (con un botón).



function tabla(){
  var id="0";
  document.write("<table id=table>");
  for(var i=0;i<25;i++){
    document.write("<tr id="+i+" onmousedown='borrarLinea(event)' >");
      for(var j=0;j<50;j++){
        document.write("<td id="+j+" onmousemove='tecla(event)'  >1</td>"); }
    document.write("</tr>");
  }
  document.write("</table>");
}

function borrarLinea(evento){
  console.log("hola"+evento.currentTarget.id);
  var valor = document.getElementById("table");
  for(var i=0;i<valor.rows.length;i++){
    if(evento.currentTarget.id==i){
      d = valor.getElementsByTagName("tr")[i];
      for(var j=0;j<50;j++){
          r = d.getElementsByTagName("td")[j].style.backgroundColor="white";
      }
    }
  }
}

function tecla(evento){
  if (evento.shiftKey) {
    evento.target.style.backgroundColor="blue";
  }else if(evento.ctrlKey ){
    evento.target.style.backgroundColor="red";
  }else if(evento.altKey){
    var valor = document.getElementById("table");
    for(var i=0;i<valor.rows.length;i++){
      d = valor.getElementsByTagName("tr")[i];
      for(var j=0;j<50;j++){
        r = d.getElementsByTagName("td")[j].style.backgroundColor="white";
      }
    }
  }
}

*/

/*9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball">


function pinchar(evento){
  var valor = evento.target.id;
  id = document.getElementById(valor);
  id.style.position = 'absolute';
  id.style.zIndex = 1000;

  document.body.append(id);

  function moveAt(pageX, pageY) {
    id.style.left = pageX - id.offsetWidth / 2 + 'px';
    id.style.top = pageY - id.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  id.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    id.onmouseup = null;
  };

  id.ondragstart = function() {
    return false;
  };
};

*/

/*10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball2">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball25">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball3">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball4">
<img onmousedown="pinchar(event)" src="https://i.pinimg.com/originals/1d/a4/bd/1da4bd38e56ef970fe9d9b4e1b093799.jpg" width="100" height="100" id="ball5">
*/

function pinchar(evento){
  var valor = evento.target.id;
  id = document.getElementById(valor);
  id.style.position = 'absolute';
  id.style.zIndex = 1000;

  document.body.append(id);

  function moveAt(pageX, pageY) {
    id.style.left = pageX - id.offsetWidth / 2 + 'px';
    id.style.top = pageY - id.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  id.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    id.onmouseup = null;
  };

  id.ondragstart = function() {
    return false;
  };
};
