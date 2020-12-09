//Clase Nota
class Nota{
  constructor(id,titulo,texto,fecha){
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.fecha = fecha;
  }
}

var cont=0;
var sepuedecrear = false;
var notas = [];
let editaa = false;
let iseditando = false;

window.onload = () =>{
  if(localStorage.getItem("notas") != null){
    notas = JSON.parse(localStorage.getItem("notas"));
    dibujarnotas();
    setInterval(actualizarmin,60000);
  }
}

// Funcion que dibuja las notas si se han guardado en la página al cargarla.

function dibujarnotas(){
  for(var i =0;i<notas.length;i++){
    var id = notas[i].id;
    cont =id.substr(4,id.length);
   var division = document.getElementById("bloque");
   var divNota = document.createElement("div");
     divNota.setAttribute("id", "nota"+cont);
     divNota.setAttribute("class", "postit");
     divNota.setAttribute("contenteditable", "false");
     divNota.setAttribute("style", "height:auto;width:200px");
     divNota.setAttribute("onmousedown", "movernota(event)");
    var divcerrar = document.createElement("div");
        divcerrar.setAttribute("align","right");
    var diva = document.createElement("a");
     diva.setAttribute("onclick","cerrarnota(event)");
     diva.setAttribute("contenteditable", "false");
     diva.setAttribute("style","color:blue");
     diva.textContent="[X]";
    var diva2 = document.createElement("a");
      diva2.setAttribute("onclick","editarnota(event)");
      diva2.setAttribute("class","editar"+cont);
      diva2.setAttribute("contenteditable", "false");
      diva2.setAttribute("style","color:red");
      diva2.textContent="[Edit]";
      divcerrar.appendChild(diva2);
     divcerrar.appendChild(diva);
   var divp = document.createElement("p");
     divp.setAttribute("class","titulo"+cont);
     divp.setAttribute("contenteditable", "false");
     divp.setAttribute("style","font-weight:bold;");
     divp.textContent=notas[i].titulo;
   var divp2 = document.createElement("p");
     divp2.setAttribute("class","texto"+cont);
     divp2.setAttribute("style","word-wrap:break-word");
     divp2.setAttribute("contenteditable", "false");
     divp2.textContent=notas[i].texto;
  var divp3 = document.createElement("p");
      divp3.setAttribute("class","fecha"+cont);
      divp3.setAttribute("contenteditable", "false");
      var fecha = Date.parse(notas[i].fecha);
      var fechahoy = new Date();
      var diffMs = (fechahoy - fecha);
      var min = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      divp3.textContent=min+" min";
    var boton = document.createElement("button");
        boton.setAttribute("class","boton"+cont);
        boton.setAttribute("align","right");
        boton.setAttribute("onclick", "crearnota(event)");
        boton.textContent="Aceptar";
        boton.setAttribute("style","visibility:hidden");
   divNota.appendChild(divcerrar);
   divNota.appendChild(divp);
   divNota.appendChild(divp2);
   divNota.appendChild(divp3);
   divNota.appendChild(boton);
   division.appendChild(divNota);

 }
}

//Funcion que elimina toda la informacion de la página y la recarga

function eliminartodo(){
  localStorage.clear();
  location.reload();
}

//Funcion en la que se crean todos los componentes internos de la nota.

function crear(){
  if(!sepuedecrear){
    cont++;
   var division = document.getElementById("bloque");
   var divNota = document.createElement("div");
     divNota.setAttribute("id", "nota"+cont);
     divNota.setAttribute("class", "postit");
     divNota.setAttribute("contenteditable", "false");
     divNota.setAttribute("style", "height:auto;width:200px");
     divNota.setAttribute("onmousedown", "movernota(event)");
    var divcerrar = document.createElement("div");
        divcerrar.setAttribute("align","right");
    var diva = document.createElement("a");
     diva.setAttribute("onclick","cerrarnota(event)");
     diva.setAttribute("contenteditable", "false");
     diva.setAttribute("style","color:blue");
     diva.textContent="[X]";
    var diva2 = document.createElement("a");
      diva2.setAttribute("onclick","editarnota(event)");
      diva2.setAttribute("class","editar"+cont);
      diva2.setAttribute("contenteditable", "false");
      diva2.setAttribute("style","color:red");
      diva2.setAttribute("style","visibility:hidden");
      diva2.textContent="[Edit]";
      divcerrar.appendChild(diva2);
     divcerrar.appendChild(diva);
   var divp = document.createElement("p");
     divp.setAttribute("class","titulo"+cont);
     divp.setAttribute("contenteditable", "true");
     divp.setAttribute("style","font-weight:bold;");
     divp.textContent="Titulo";
   var divp2 = document.createElement("p");
     divp2.setAttribute("class","texto"+cont);
     divp2.setAttribute("style","word-wrap:break-word");
     divp2.setAttribute("contenteditable", "true");
     divp2.textContent="Aqui va el texto..";
  var divp3 = document.createElement("p");
      divp3.setAttribute("class","fecha"+cont);
      divp3.setAttribute("contenteditable", "false");
      divp3.setAttribute("style","visibility:hidden");
      divp3.textContent=" min";
    var boton = document.createElement("button");
        boton.setAttribute("class","boton"+cont);
        boton.setAttribute("align","right");
        boton.setAttribute("onclick", "crearnota(event)");
        boton.textContent="Aceptar";
   divNota.appendChild(divcerrar);
   divNota.appendChild(divp);
   divNota.appendChild(divp2);
   divNota.appendChild(divp3);
   divNota.appendChild(boton);
   division.appendChild(divNota);
   sepuedecrear = true;
 }
}

//Funcion que cierra las notas y las elimina tanto del array como de la pagina.

function cerrarnota(evento){
  if (confirm("¿Estas seguro?")) {
    txt = "Sí";
    var id = evento.target.parentNode.parentNode.id;
    for(var i =0;i<notas.length;i++){
      if(id==notas[i].id){
        notas.splice(i,1);
      }
    }
    document.getElementById(id).remove();
    sepuedecrear = false;
    localStorage.setItem("notas", JSON.stringify(notas));
  } else {    txt = "No"; }

}

//Funcion que se llama al pulsar encima del edit que sirve para mostrar el boton
// y poder editar los parrafos.

function editarnota(evento){
  if(!iseditando){
    var id = evento.target.parentNode.parentNode.id;
    for(var i =0;i<notas.length;i++){
      if(id==notas[i].id){
        var titulo = document.getElementsByClassName("titulo"+id.substr(4,id.length));
        var texto = document.getElementsByClassName("texto"+id.substr(4,id.length));
        titulo[0].setAttribute("contenteditable", "true");
        texto[0].setAttribute("contenteditable", "true");
        var nested = document.getElementsByClassName("boton"+id.substr(4,id.length));
        nested[0].style.visibility="visible";
        editaa = true;
        sepuedecrear = false;
        iseditando=true;
      }
    }

  }
}

//Funcion que se utiliza en el método onclick del boton de la nota , que segun
//si previamente se ha dado al boton de editar o no se utiliza para editar o crear notas.

function crearnota(event){
var id = event.target.parentNode.id;
if(editaa){
  if (confirm("¿Estas seguro?")) {
    txt = "Sí";
  var titulo = document.getElementsByClassName("titulo"+id.substr(4,id.length));
  var texto = document.getElementsByClassName("texto"+id.substr(4,id.length));
  var fecha = new Date();

  for(var i =0;i<notas.length;i++){
    if(id==notas[i].id){
      notas[i].titulo = titulo[0].textContent;
      notas[i].texto = texto[0].textContent;
      notas[i].fecha = new Date();
      var id2= notas[i].id;
      var divNota = document.getElementById("nota"+id2.substr(4,id2.length));
      var nested = document.getElementsByClassName("boton"+id2.substr(4,id2.length));
      var editar = document.getElementsByClassName("editar"+id2.substr(4,id2.length));
      titulo[0].setAttribute("contenteditable", "false");
      texto[0].setAttribute("contenteditable", "false");
      nested[0].style.visibility="hidden";
      editar[0].style.visibility="visible";
      sepuedecrear = false;
      localStorage.setItem("notas", JSON.stringify(notas));
      var botn = document.getElementsByClassName("boton"+cont);
      botn[0].style.visibility="hidden";
      editaa = false;
      iseditando=false;
    }
  }
  } else {    txt = "No"; }
}else{
   var id = "nota"+cont;
   var titulo = document.getElementsByClassName("titulo"+cont);
   var texto = document.getElementsByClassName("texto"+cont);
   var fech = new Date();
   notas.push(new Nota(id,titulo[0].textContent,texto[0].textContent,fech));
   var divNota = document.getElementById("nota"+cont);
   var botn = document.getElementsByClassName("boton"+cont);
   var editar = document.getElementsByClassName("editar"+cont);
   var editar = document.getElementsByClassName("editar"+cont);
   var fecha = document.getElementsByClassName("fecha"+cont);
   titulo[0].setAttribute("contenteditable", "false");
   texto[0].setAttribute("contenteditable", "false");
   botn[0].style.visibility="hidden";
   editar[0].style.visibility="visible";
   editar[0].setAttribute("style","color:red");
   fecha[0].style.visibility="visible";
   var fechahoy = new Date();
   var diffMs = (fechahoy - fech);
   var min = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
   fecha[0].textContent = min+" min";

   sepuedecrear = false;
   localStorage.setItem("notas", JSON.stringify(notas));
 }
}


//Funcion que actualiza los minutos de todas las notas.

function actualizarmin(){
  console.log("hola");
  for(var i =0;i<notas.length;i++){
    var id = notas[i].id;
    var constante = id.substr(4,id.length);
    var  parrafo = document.getElementsByClassName("fecha"+constante);
    var fecha = Date.parse(notas[i].fecha);
     var fechahoy = new Date();
     var diffMs = (fechahoy - fecha);
     var min = Math.round(((diffMs % 86400000) % 3600000) / 60000);
     parrafo[0].textContent=min+" min";
  }
}

//Funcion que mueve la nota de posicion.

function movernota(evento){
  try{
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
    }catch(error){
      console.log();
    }
};
