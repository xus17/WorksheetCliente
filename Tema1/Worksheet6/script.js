*4.10. Escribir un programa que muestre la frase “Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas. El
resultado debe ser el siguiente:

for(var i =1;i<=6;i++){
    document.write("<h"+i+">"+"Cabecera h"+i+"<h"+i+">");
}
*/


/*4.11. Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.

var columnas = prompt("Introduce numero de columnas: ");
var altura = prompt("Introduce la altura: ");
var anchura = prompt("Introduce la anchura: ");

document.write("<table border = 0 cellspacing =2 bgcolor=black >");
document.write("<tr bgcolor=white height="+parseInt(altura)+">")
for(var i =1;i<=parseInt(columnas);i++){
  document.write("<td width ="+parseInt(anchura)+">&nbsp</td>");
}
document.write("</tr>");
document.write("</table>");

*/

/*4.12. Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.

var columnas = prompt("Introduce numero de columnas: ");
var altura = prompt("Introduce la altura: ");
var anchura = prompt("Introduce la anchura: ");

document.write("<table border = 0 cellspacing =2 bgcolor=black >");
document.write("<tr bgcolor=white height="+parseInt(altura)+">")
for(var i =1;i<=parseInt(columnas);i++){
  if(i%2!=0){
    document.write("<td bgcolor=black width ="+parseInt(anchura)+">&nbsp</td>");
  }else{
    document.write("<td width ="+parseInt(anchura)+">&nbsp</td>");
  }

}
document.write("</tr>");
document.write("</table>");
*/

/*4.13. Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for.

var columnas = prompt("Introduce numero de columnas: ");
var altura = prompt("Introduce la altura: ");
var anchura = prompt("Introduce la anchura: ");
var i=1;
document.write("<table border = 0 cellspacing =2 bgcolor=black >");
document.write("<tr bgcolor=white height="+parseInt(altura)+">")
while(i!=parseInt(columnas)){
  document.write("<td width ="+parseInt(anchura)+">&nbsp</td>");
  i++;
}
document.write("</tr>");
document.write("</table>");
*/

/*4.14. Adapta el ejercicio 4.12 utilizando un bucle while en vez de un bucle for.

var columnas = prompt("Introduce numero de columnas: ");
var altura = prompt("Introduce la altura: ");
var anchura = prompt("Introduce la anchura: ");
var i=0;
document.write("<table border = 0 cellspacing =2 bgcolor=black >");
document.write("<tr bgcolor=white height="+parseInt(altura)+">")
while(i!=parseInt(columnas)){
  if(i%2==0){
    document.write("<td bgcolor=black width ="+parseInt(anchura)+">&nbsp</td>");
  }else{
    document.write("<td width ="+parseInt(anchura)+">&nbsp</td>");
  }
  i++;
}
document.write("</tr>");
document.write("</table>");
*/

/*4.15. Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.

var numadivinar = Math.random()*100+1;
var num = 0;
while(parseInt(num) != parseInt(numadivinar) ){
  num = prompt("Introduce un numero: ");
  if(num<parseInt(numadivinar)){
    alert("Es mayor");
  }else if(num>parseInt(numadivinar)){
    alert("Es menor");
  }else if (parseInt(num) == parseInt(numadivinar)){
    alert("HAS ACERTADO");
  }
}
*/

/*4.16. Adaptar el ejercicio 4.15. al bucle DO..WHILE

var numadivinar = Math.random()*100+1;
var num = 0;
do{
  num = prompt("Introduce un numero: ");
  if(num<parseInt(numadivinar)){
    alert("Es mayor");
  }else if(num>parseInt(numadivinar)){
    alert("Es menor");
  }else if (parseInt(num) == parseInt(numadivinar)){
    alert("HAS ACERTADO");
  }
}while(parseInt(num) != parseInt(numadivinar));

*/

/*4.17. Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.

for(var i=0;i<=10;i++){
  document.write("Tabla del "+i+":<br>");
  for(var j =0;j<=10;j++){
    var mult = parseInt(i)*parseInt(j);
    document.write(j+"x"+i+"="+mult+"<br>");
  }
  document.write("<br><br>")
}

*/

/*4.18. Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura (en pixels) de sus
celdas. Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas.

var columnas = prompt("Introduce numero de columnas: ");
var filas = prompt("Introduce el numero de filas: ");
var altura = prompt("Introduce la altura: ");
var anchura = prompt("Introduce la anchura: ");

document.write("<table border = 0 cellspacing =2 bgcolor=black >");
for(var j = 1;j<=parseInt(filas);j++){
  document.write("<tr bgcolor=white height="+parseInt(altura)+">")
  for(var i =1;i<=parseInt(columnas);i++){
    document.write("<td width ="+parseInt(anchura)+">&nbsp</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
*/

/*4.19. Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando
dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto. */

var altura = prompt("Introduce la altura: ");

document.write("<table border = 0 cellspacing =2 bgcolor=black >");
for(var j = 1;j<=8;j++){
  document.write("<tr bgcolor=white height="+parseInt(altura)+">")
  for(var i =1;i<=8;i++){
    if(j%2==0){
      if(i%2==0){
        document.write("<td bgcolor=black width ="+parseInt(altura)+">&nbsp</td>");
      }else{
        document.write("<td width ="+parseInt(altura)+">&nbsp</td>");
      }
    }else{
      if(i%2!=0){
        document.write("<td bgcolor=black width ="+parseInt(altura)+">&nbsp</td>");
      }else{
        document.write("<td width ="+parseInt(altura)+">&nbsp</td>");
      }
    }

  }
  document.write("</tr>");
}
document.write("</table>");
