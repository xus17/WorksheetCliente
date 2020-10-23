/*Ej.1 Crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	página	web	en
párrafos	distintos

var nombre = prompt("Introduce el nombre");
var apellido = prompt("Introduce el apellido");
var edad = prompt("Introduce la edad");

document.write("El nombre es "+nombre+"<br> El apellido es "+apellido+ " <br> La edad es "+edad);

*/

/*Ej.2 - Crea	un	script	que	muestre	en	una	ventana	emergente	“hola”	y	tu	nombre	(pidiéndolo
anteriormente)	utilizando	concatenación	de	cadenas.
Se	concadena	cadenas	utilizando	el	símbolo	“+”.

var nombre = prompt("Introduce el nombre");
alert("Hola " + nombre);

*/

/*Ej.3 Crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa
información	en	pantalla	en	una	ventana	emergente.

var nombre = prompt("Introduce el nombre");
var apellido = prompt("Introduce el apellido");
var edad = prompt("Introduce la edad");
var ciclo = prompt("Introduce el ciclo que estudias");

alert("El nombre es "+nombre+" el apellido es "+apellido+ " la edad es "+edad+ " el ciclo que estudia es "+ciclo);

*/

/*Ej.4 Crea	un	script	que	determine	si	un	número	introducido	por	el	usuario	es	par

var num = prompt("Intoduce un numero");

if((num % 2) == 0){
  document.write("Es par");
}else{
  document.write("Es impar");
}

*/

/*Ej.5 Crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	es	mayor	de	edad.

var num = prompt("Intoduce la edad");

if(num < 18){
  document.write("Es menor de edad");
}else{
  document.write("Es mayor de edad");
}

*/

/*Ej.6 Crea	un	script	que	reciba	la	edad	de	un	usuario,	y	su	localidad	de	nacimiento	y	muestre	en	pantalla
“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.

var num = prompt("Intoduce la edad");
var localizacion = prompt("Introduce la localidad de nacimiento");

if((num >18) && (localizacion=="Madrid")){
  document.write("Enhorabuena");
}else{
  document.write("No Enhorabuena");
}

*/

/*Ej.7 Crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.

var num = prompt("Intoduce un número: ");
if(num >100){
  var num2 = num - (num * 15 / 100);
  document.write("El nuevo número es : "+num2);
}

*/
/*Ej.8 Crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,
Eduardo	y	Clara).

var nombre = prompt("Intoduce el nombre: ");

if((nombre=="Pablo")||(nombre=="Eduardo")){
  document.write("Bienvenido");
}else if((nombre=="Clara")||(nombre=="Ana")){
  document.write("Bienvenida");
}

*/

/*Ej.9 Crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script
debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.

var num = prompt("Intoduce la edad");
var localizacion = prompt("Introduce donde vives:");

if(((num >18)&&(num<30)) && (localizacion=="Madrid")){
  document.write("Puede acceder al carnet de empresarios emprendedores");
}else{
  document.write("Pagafantas");
}

*/

/*Ej.10 Crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en
pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.

var nombre = prompt("Intoduce el nombre");
var apellidos = prompt("Introduce los apellidos");

if(nombre=="Ricardo"){
  document.write("Los apellidos son: "+apellidos);
}else{
  console.log(apellidos);
}

*/

/*Ej.11 Crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	puede	jubilarse	o	no	(la	jubilación	se
alcanza	con	67 años).

var num = prompt("Intoduce la edad");

if(num >66){
  document.write("Se puede jubilar");
}else{
  document.write("Pagafantas");
}

*/

/*Ej.12 Crea	un	script	que	pregunte	la	edad,	y	determine	si	debes	estar	en	el	jardín	de	infancia	(menores	de
5	años),	en	primaria	(entre	6	y	11),	en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	(entre	17	y	21)	o	en
la	Universidad	(más	de	21).

var num = prompt("Intoduce la edad");

if(num<6){
  document.write("Jardin de infancia");
}else if ((num>5) && (num<12)){
  document.write("Primaria");
}else if ((num>11) && (num<17)){
  document.write("ESO");
}else if ((num>16) && (num<22)){
  document.write("Bachillerato o Ciclos");
}else{
  document.write("Univerdad")
}

*/

/*Ej.13 Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso
de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el
usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene
hermanos	se	mostrará	la	cantidad	sin	descuento.

var cantidad = prompt("Intoduce la cantidad");
var hermanos = prompt("Introduce los hermanos");
var cantidad2;

if(hermanos==0){
  document.write("Cantidad sin descuento: "+cantidad);
}else if (hermanos<3){
  cantidad2= cantidad - (cantidad * 5 / 100)
  document.write("Cantidad con 5% de descuento: "+cantidad2);
}else if (hermanos>2){
  cantidad2= cantidad - (cantidad * 15 / 100)
  document.write("Cantidad con 15% de descuento: "+cantidad2);
}

*/

/*Ej.14 Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	dos	trabajos	y	determine	si	la	media	es	superior
a	5	para	aprobar	la	asignatura	(75%	exámenes	y	25%	trabajos)	y	4.5	en	todos	ellos

var nota = prompt("Introduce la primera nota");
var nota2 = prompt("Introduce la segunda nota");
var trabajo = prompt("Introduce el primer trabajo");
var trabajo2 = prompt("Introduce el segundo trabjo");
if((nota>=4.5)&&(nota2>=4.5)&&(trabajo>=4.5)&&(trabajo2>=4.5)){
  var medianota = ((parseInt(nota) + parseInt(nota2)) / 2)*(75/100) ;
  var mediatrabajo = ((parseInt(trabajo) + parseInt(trabajo2)) / 2)*(25/100) ;
  var media =  parseFloat(medianota) + parseFloat(mediatrabajo);
  document.write("Media nota = "+medianota+" <br>Media trabajos = "+mediatrabajo+"<br> Media total = "+media);
}

*/

/*Ej.15 Crea	un	script	que	pregunte	al	usuario	por	el	nombre	de	un	mes,	y	muestre	el	número	de	días	que
tiene	el	mes.

var mes= prompt("Introduce el mes: ");

switch(mes){
  case 'Enero':
    document.write("31");
  break;
  case 'Febrero':
    document.write("28");
  break;
  case 'Marzo':
    document.write("31");
  break;
  case 'Abril':
    document.write("30");
  break;
  case 'Mayo':
    document.write("31");
  break;
  case 'Junio':
    document.write("30");
  break;
  case 'Julio':
    document.write("31");
  break;
  case 'Agosto':
    document.write("30");
  break;
  case 'Septiembre':
    document.write("31");
  break;
  case 'Octubre':
    document.write("30");
  break;
  case 'Noviembre':
    document.write("31");
  break;
  case 'Diciembre':
    document.write("31");
  break;
}

*/

/*Ej.16 Crea	un	script	que	pregunte	al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y
si	es	múltiplo	de	5. */
/*Con If intercalandolo en el switch*/
var num = prompt("Introduce un número:");
switch (num) {
  case (num % 2 == 0):
        document.write("Par");
    break;
  case (num % 3 == 0):
        document.write("Multiplo de 3");
    break;
  case (num %5 == 0):
        document.write("Multiplo de 5");
    break;
}



/*Ej.17 Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).
El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario.

var num = prompt("Introduce un número:");
var num2 = prompt("Introduce un número:");
var valor = prompt("Introduce el caracter:");
var calculo;

switch (valor) {
  case "+":
        calculo = parseFloat(num) + parseFloat(num2);
        document.write("Suma: "+num+" + "+num2+" = "+calculo);
    break;
  case "-":
      calculo = parseFloat(num) - parseFloat(num2);
      document.write("Resta: "+num+" - "+num2+" = "+calculo);
    break;
  case "*":
      calculo = parseFloat(num) * parseFloat(num2);
      document.write("Multiplicacion: "+num+" * "+num2+" = "+calculo);
    break;
  case "/":
      calculo = parseFloat(num) / parseFloat(num2);
      document.write("Division: "+num+" / "+num2+" = "+calculo);
    break;
}

*/

/*Ej.18 Crea	un	script	que	muestre	en	la	página	web	todos	los	números	desde	el	uno	hasta	el	10,	cada	uno
de	ellos	separado	por	una	línea	(<hr>)

for(let i =0;i<11;i++){
  document.write("Número: "+i+"<br>");
}

*/

/*Ej.19 Crea	un	script	que	pida	al	usuario	un	número,	e	imprima	en	el	documento	HTML	todos	los	números
desde	el	número	introducido	por	el	usuario	hasta	el	100.

var numero = prompt("Introduce un numero:");

for(parseInt(numero);numero<=100;numero++){
  document.write("Número: "+numero+"<br>");
}

*/

/*Ej.20 Crea	un	script	que	pregunte	constantemente	números	al	usuario	hasta	que	el	usuario	introduzca	el
número	0.

let num=1;
do{
  num = prompt("Introduce un numero:");
}while (num!=0);

*/

/*Ej.21 Crea	que	un	script	que	imprima	en	el	documento	HTML	todas	las	palabras	introducidas	por	el	usuario.
El	script	debe	terminar	cuando	el	usuario	introduzca	la	palabra	“SALIR”

var num=1;
do{
  num = prompt("Introduce una palabra:");
  document.write(num+"<br>");
}while (num!="SALIR");

*/

/*Ej.22 Crea	un	script	que	pida	al	usuario	10	números,	y	muestre	su	suma	en	pantalla.

var contador=0;
var numtotal=0;
do{
  var num = prompt("Introduce un numero:");
  numtotal = parseInt(numtotal) + parseInt(num);
  contador++;
}while (contador!=10);

numtotal = parseInt(numtotal) / 10;

document.write("Media final :"+numtotal);

*/
