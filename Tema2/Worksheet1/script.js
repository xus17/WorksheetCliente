*1

var date = new Date();
document.write("Año : "+date.getFullYear()+"<br>");
var month = date.getMonth()+1;
document.write("Mes : "+month+"<br>");
document.write("Dia : "+date.getDate()+"<br>");
document.write("Hora : "+date.getHours()+"<br>");
document.write("Minutos : "+date.getMinutes()+"<br>");
document.write("Segundos : "+date.getSeconds()+"<br>");

*/
/*2*/
var fechahoy = new Date();
var mes = fechahoy.getMonth()+1;

document.write("Fecha = "+fechahoy.getDate()+"/"+mes+"/"+fechahoy.getFullYear()+"<br>");

var fecha85 = new Date();
fecha85.setDate(fecha85.getDate()+85);
var mes2 = fecha85.getMonth()+1;
document.write("Fecha = "+fecha85.getDate()+"/"+mes2+"/"+fecha85.getFullYear()+"<br>");

var fecha187 = new Date();
fecha187.setDate(fechahoy.getDate()-187);
var mes3 = fecha187.getMonth()+1;
fecha187.setYear(fechahoy.getFullYear());
document.write("Fecha = "+fecha187.getDate()+"/"+mes3+"/"+fecha187.getFullYear()+"<br>");


fecha85.setYear(fecha85.getFullYear()+2);
document.write("Fecha = "+fecha85.getDate()+"/"+mes2+"/"+fecha85.getFullYear()+"<br>");

fecha187.setHours(fecha187.getHours()-24);
document.write("Fecha = "+fecha187.getDate()+"/"+mes3+"/"+fecha187.getFullYear()+" Hora: "+fecha187.getHours()+":"+fecha187.getMinutes()+":"+fecha187.getSeconds()+"<br>");

var fechaResto = new Date();
fechaResto.setTime(fecha85.getTime() - fecha187.getTime());
var mes4 = fechaResto.getMonth();
document.write("Fecha = "+fechaResto.getDate()+"/"+mes4+"/"+fechaResto.getFullYear()+"<br>");


/*3

// Otra forma setTimeout( () => alert('Han pasado 60 segundos desde la carga de la página') ,60000);

setTimeout(alerta,60000);
function alerta() {
  alert('Han pasado 60 segundos desde la carga de la página')
}

*/

/*4
setTimeout(alerta,5000);
function alerta() {
  alert('Han pasado 5segundos desde la carga de la página');
  location.reload();
}
*/

/*5
mueveReloj();
function mueveReloj(){
    fecha = new Date();
    horaImprimible = fecha.getHours() + " : " +fecha.getMinutes() + " : " + fecha.getSeconds();
    document.write(horaImprimible);
    setTimeout("mueveReloj()",1000);
    location.reload();
}
*/
