/* EX1
Crea una tabla de 8 filas, a continuación pon el fondo rojo a todas aquellas que estén por
 encima de la tercera (2) y pon el fondo azul a todas aquellas que estén por debajo de la tercera*/
for (var i = 0; i < 9; i++) {
  if (i < 4) {
    $('table:nth-child(1) tr:nth-child(' + i + ') td').css("background", "blue");
  } else {
    $('table:nth-child(1) tr:nth-child(' + i + ') td').css("background", "red");
  }
}

/* EX3
Selecciona de una tabla todas las casillas vacías y ponlas un color de fondo amarillo.*/
$('td:empty').height("20px");
$('td:empty').css('background', 'yellow');

/*EX 7
Crea un documento en el que se produzcan 4 animaciones mediante un botón y mediante un
segundo botón se elimine la cola de animaciones.*/

$('#bt1').click(function() {
      $("img").animate({
        'width': "200px",
        'height': '200px',
        'margin-left': '20%'
      }, 5000);
});

$("#bt2").click(function() {
  $("img").stop();
});

/*EX 8
Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados,
establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente.*/

$('.cuadrado').width("200px");
$('.cuadrado').height("200px");
$('.cuadrado').css("background-color","red");
$('.cuadrado').css("border","solid");
$('#fade').click(function(){
  $('#divf1').fadeIn("slow");
  $('#divf2').fadeIn("fast");
  $('#divf3').fadeIn(800);
  $('#divf4').fadeIn(2000);
  $('#divf5').fadeIn(4000);
});

/*EX 9
Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la
siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la
izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba.*/

$('#bt3').click(function() {
      $("#div9").fadeIn("slow");
      $("#div9").animate({
        'width': "40px",
        'height': '40px',
        'left': '200px'
      }, 5000);
      $("#div9").slideUp();
});

$("#bt4").click(function() {
  $("#div9").stop();
});

/*EX 10
Seguridad en una clave Crea un plugin que realice lo siguiente. Tendremos un formulario
con un campo input password. Con jQuery mostraremos dinámicamente un mensaje al lado del
campo con la fortaleza de la clave que haya escrita. A medida que el usuario cambie el
contenido del campo, se actualizará el mensaje del lado, mostrando la fortaleza de la nueva
clave. (<5 no segura, >5 y <8 medianamente segura, >8 segura)*/
