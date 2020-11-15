/*Diseña una web que hará uso de cookies para guardar el nombre del usuario.
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre
del usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto
saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada
 la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá
  proporcionar también un enlace para borrar la cookie
  (lo que podríamos llamar 'Cerrar Sesión').*/

window.onload = function(){
  if((getCookie("name") != "") || (getCookie("name") == "null")){
    alert('Bienvenido ' + getCookie("name"));
  }else{
    var name = prompt("Introduce tu nombre: ");
    document.cookie ="name=" + name +";max-age=300";
  }
};


function alertCookie() {
  var nombre = document.getElementById("nombreUsuario").value;
  document.cookie = "name=" + nombre  +";max-age=300";
    console.log("hola "+document.cookie);
  alert("Has cambiado el nombre a "+getCookie("name"));
}

function logout() {
  document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  alert("Has cerrado Sesión"+getCookie("name"));
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
