/*1*/
/*a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario

function invierteCadena(cadena){
  var x = cadena.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

document.write(invierteCadena("hola,adios"));
*/

/*b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena

function inviertePalabras(...cadena){
  var x = cadena.length;
  var cadenaInvertida = "";

  for(var i=x-1;i>=0;i--){
    cadenaInvertida = cadenaInvertida + cadena[i];
  }

  return cadenaInvertida;
}

document.write(inviertePalabras("hola","adios","caracaqui"));
*/
/*c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenida

function encuentraPalabraMasLarga(...cadena){

  var valor =0;
  var posicion=0;

  for(var i =0;i<cadena.length;i++){
      if(valor<cadena[i].length){
        valor = cadena[i].length;
        posicion = i;
    }
  }
  document.write("La palabra mas larga es: "+ cadena[posicion]);
}
encuentraPalabraMasLarga("Alcantarilla","Rata","Pecholobooooooo","Principesa");
*/

/*d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i.

function filtraPalabraMasLarga(longitud,...cadena){
  var valor ="";
  for(var i =0;i<cadena.length;i++){
    if(cadena[i].length==longitud){
      valor = valor +" "+cadena[i];
    }
  }
    document.write("Las palabras de longitud "+longitud+" son: " + valor);

}
filtraPalabraMasLarga(4,"holaja","adio","cara");
*/

/*e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto en ó ú
min scula.

function cadenaBienFormada(...cadena){
  var valor ="";
  var resultado="";
  for(var i =0;i<cadena.length;i++){
    valor = cadena[i].charAt(0).toUpperCase()+cadena[i].slice(1);
    resultado = resultado +" "+valor;
  }
  document.write("Las palabras con la primera letra en mayuscula son: " + resultado);
}
cadenaBienFormada("holaja","adio","cara","pepe");
*/


/*2. Definir una funcion que muestre informacion sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la funcion
determina si esa cadena está formada solo por mayusculas, solo por minusculas o
por una mezcla de ambas.

function informacioncadena(cadena){

  var resultado = "La cadena \""+cadena+"\" ";

  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }else {
    resultado += " está formada por mayúsculas y minúsculas";
  }
  document.write(resultado);
}

informacioncadena("Pepe y juan en realidad son antonio");

*/

/*7. Desarrolla una función que tomando como entrada una cadena de texto nos
devuelva si es o no un palindromo.

function palindromo(cadena){
  var inversa = "";
  var x = cadena.length;
  while (x>=0) {
    inversa = inversa + cadena.charAt(x);
    x--;
  }
  if(cadena==inversa){
    document.write("La palabra  "+cadena+" es palíndroma.");
  }else{
    document.write("La palabra  "+cadena+" no es palíndroma.");
  }
}

palindromo("oso");
*/

/*9. Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:
Entrada: HOLA
Salida:
H O L A
O     L
L     O
A L O H
*/
function palabracuadrada(palabra){
  var final = "";
  var x = palabra.length;
  var x2 = palabra.length;
  var inversa = "";

  while (x>=0) {
    inversa = inversa + palabra.charAt(x);
    x--;
  }
  /*
  final += palabra+"<br>";
  for(var i=1;i<x2-1;i++){
    final += palabra.charAt(i)+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+inversa.charAt(i)+"<br>";
  }
  final +=inversa;
  */
  var tabla="<table>";
  for(var i =0;i<x2;i++){
      tabla += "<tr>";
      for(var j =0;j<x2;j++){
        tabla+= "<td>";
        if (i==0)
          tabla+= palabra[j]+"</td>";
        else if ( i== x2 -1)
          tabla+= inversa[j]+"</td>";
          else {
            if (j==0) tabla+= palabra[i]+"</td>";
            else if (j==x2-1) tabla+= inversa[i]+"</td>";
          }
      }
      tabla+="</tr>";
  }
  tabla+="</table>"

  document.write("Entrada: "+palabra+"<br>");
  document.write("Salida: <br>");
  document.write(tabla);
}

palabracuadrada("ARRIBAESPAÑITA");
