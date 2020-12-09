var gatos = [];
class gato{
  constructor(num,nombre,img){
    this.num = num;
    this.nombre = nombre;
    this.img =img;

    function aumentar(){
      this.num++;
    }
  }
}
window.onload = () =>{
  for(i=0;i<11;i++){
    gatos.push(new gato(0,"Pepe"+i,"imagen"+i));
  }

}

document.getElementsByTagName("img").addEventListener("click", function cambiarvalor(){
  var cantidad = this.attr("id");
  for(i=0;i<gatos.length;i++){
    if(cantidad==gatos[i].getAttribute("img")){
      gatos[i].aumentar();
      document.getElementById("cantidad"+i).innerHTML= gatos[i].getAttribute("nombre")+ gatos[i].getAttribute("num");
    }
  }
});




//
// function clica(){
//   num1++;
//   document.getElementById("cantidad").innerHTML="Er Pepe: "+num1;
// }
//
// function clica2(){
//   num2++;
//   document.getElementById("cantidad2").innerHTML="Ete Sech: "+num2;
// }
//
// function clica3(){
//   num3++;
//   document.getElementById("cantidad3").innerHTML="Ete Jesu: "+num3;
// }
//
// function clica4(){
//   num4++;
//   document.getElementById("cantidad4").innerHTML="Ete Alberto: "+num4;
// }
//
// function clica5(){
//   num5++;
//   document.getElementById("cantidad5").innerHTML="Ete Nacho: "+num5;
// }
//
// function clica6(){
//   num6++;
//   document.getElementById("cantidad6").innerHTML="Ete Juanito Valderrama: "+num6;
// }
//
// function clica7(){
//   num7++;
//   document.getElementById("cantidad7").innerHTML="Ete Joaquin: "+num7;
// }
//
// function clica8(){
//   num8++;
//   document.getElementById("cantidad8").innerHTML="Ete Mussolini: "+num8;
// }
//
// function clica9(){
//   num9++;
//   document.getElementById("cantidad9").innerHTML="Ete Hitler: "+num9;
// }
//
// function clica10(){
//   num10++;
//   document.getElementById("cantidad10").innerHTML="Ete Franquito: "+num10;
// }
