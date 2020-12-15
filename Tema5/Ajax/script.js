function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML += this.responseText;
     texto = JSON.parse(this.responseText);
     for(var i =0;i<texto.listanotas[0].notas.length;i++){
       console.log(texto.listanotas[0].notas[i].mensaje);
     }
    }
  };

  xhttp.open("GET", "xus.txt", true);
  xhttp.send();
}
