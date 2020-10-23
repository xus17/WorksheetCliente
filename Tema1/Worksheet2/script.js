/* ### 3. The Geometrizer

Calculate properties of a circle, searching the internet for definitions if not remember.

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

var radio = prompt("Introduce el radio:");
var circumference;
var area;

//CALCULAR CIRCUNFERENCIA = PI * 2*RADIO
circumference = ( 2 * radio) * 3,14;
document.write("La circunferencia es = "+circumference);

//CALCULAR AREA = PI * R AL CUADRADO
area = (radio * radio)*3,14;
document.write("</br>El área es = "+area);

/* ### 4. The Temperature Converter

It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."

*/

var celsius =prompt("Introduce los grados celsius:");
var conversionfarenheit = celsius * 9 / 5 + 32;

var farenheit = conversionfarenheit;
var conversioncelsius = (farenheit - 32) * 5 / 9;

document.write('<br/>' + celsius + 'º Celsius a Farenheit: ' + conversionfarenheit);
document.write('<br/>' + farenheit + 'º Farenheit a Celsius: '+ conversioncelsius);
