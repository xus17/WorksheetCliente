document.getElementById('input1').style.marginLeft='85px';
document.getElementById('input2').style.marginLeft='75px';
document.getElementById('input3').style.marginLeft='108px';
document.getElementById('input4').style.marginLeft='78px';
document.getElementById('input5').style.marginLeft='98px';
document.getElementById('input6').style.marginLeft='10px';

Array.from(document.getElementsByTagName("input")).forEach((item, i) => {
  item.style.width="250px";
});


document.getElementById("form").style.width="500px";
document.getElementById("form").style.backgroundColor="blue";
document.getElementById('boton').style.marginTop='10px';
document.getElementById("body").style.textAlign="center";

function comprobar(){
  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');
  var input3 = document.getElementById('input3');
  var input4 = document.getElementById('input4');
  var input5 = document.getElementById('input5');
  var input6 = document.getElementById('input6');

  if((input1.value!="") && (input2.value!="") && (input3.value!="")&& (input4.value!="")&& (input5.value!="")&& (input6.value!="")){
    var expresion_regular_nomUsuario =/(?=.*\d)(?=.*[!@#$%^&()+])[\w!@#$%^&()+]{8,}$/;
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    var expresion_regular_numero =/^\d{9}$/;
    var expresion_regular_email =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(expresion_regular_dni.test (input3.value) == true){
      if(expresion_regular_numero.test (input4.value) == true){
        if(expresion_regular_email.test (input5.value) == true){
          if(expresion_regular_nomUsuario.test (input6.value) == true){

          }else{alert("EL NOMBRE DE USUARIO NO ESTA BIEN");}
        }else{alert("EL EMAIL NO ESTA BIEN");}
      }else{alert("EL NUMERO NO ESTA BIEN");}
    }else{alert("EL DNI NO ESTA BIEN");}
  }else{alert("FALTA ALGUN VALOR");}
}
