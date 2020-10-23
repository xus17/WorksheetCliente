*5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
// arr = Array(100).fill().map(()=>Math.round(Math.random() * (1000-1) + 1)));
//arr.forEach((valor =>  { if(valor%2==0){par}else{impar})); y luego par.concat(impar);

paresImpares();

function paresImpares(){

  let arr = new Array();
  let arrPar = new Array();
  let arrImpar = new Array();

  for(var i =0;i<=100;i++){
    var numaleatorio = Math.random() * (1000-1) + 1;
    if(parseInt(numaleatorio)%2==0){
      arr.push(parseInt(numaleatorio));
      arrPar.push(parseInt(numaleatorio));
    }else{
      arr.push(parseInt(numaleatorio));
      arrImpar.push(parseInt(numaleatorio));
    }
  }

  for(var j=0;j<arr.length;j++){
    var mostrar="";
    if(j==0){ mostrar += "Los valores numéricos del array sin ordenar son: "+arr[j]+" ";
    }else{ mostrar += arr[j]+" ";}
    document.write(mostrar);
  }

  document.write("<br><br>");
  arr = [];

  for(var j=0;j<arrPar.length;j++){
    arr.push(arrPar[j]);
  }

  for(var j=0;j<arrImpar.length;j++){
    arr.push(arrImpar[j]);
  }

  for(var j=0;j<arr.length;j++){
    var mostrar="";
    if(j==0){ mostrar += "Los valores numéricos del array ordenados son: "+arr[j]+" ";
    }else{ mostrar += arr[j]+" ";}
    document.write(mostrar);
  }
}
*/

/*7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.

var arra = [1,2,3,4,5,6,7,8,9,10];
addUno(arra);
valorescero(arra);

function valorescero(array){
    document.write("<br>Array al principio ");
    mostrar(array);
    for(var i=0;i<array.length;i++){
      array[i]=0;
    }

    document.write("<br>Array al final :");
    mostrar(array);
}

function mostrar(array){
  for(var i =0;i<array.length;i++){
    document.write(array[i]+" ");
  }
}

function addUno(array){
  for(var i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  document.write("Array sumandole uno : ");
  mostrar(array);
}
*/

/*8.Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.*/

/*9. Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).

var arra= new Array();
var count2=0, count3=0, count4=0, count5=0,count6=0,count7=0,count8=0,count9=0,count10=0,count11=0,count12=0;
dados(arra);

function dados(array){
  for(var i =0;i<36001;i++){
    var numaleatorio1 = Math.round(Math.random()* (6-1) +1);
    var numaleatorio2 = Math.round(Math.random()* (6-1) +1);
    var suma = numaleatorio1 + numaleatorio2;

    if(suma==2){count2+=1;
    }else if(suma==3){count3+=1;
    }else if(suma==4){count4+=1;
    }else if(suma==5){count5+=1;
    }else if(suma==6){count6+=1;
    }else if(suma==7){count7+=1;
    }else if(suma==8){count8+=1;
    }else if(suma==9){count9+=1;
    }else if(suma==10){count10+=1;
    }else if(suma==11){count11+=1;
    }else if(suma==12){count12+=1;}
  }
  document.write("El valor 2 ha salido "+count2+" veces<br>");
  document.write("El valor 3 ha salido "+count3+" veces<br>");
  document.write("El valor 4 ha salido "+count4+" veces<br>");
  document.write("El valor 5 ha salido "+count5+" veces<br>");
  document.write("El valor 6 ha salido "+count6+" veces<br>");
  document.write("El valor 7 ha salido "+count7+" veces<br>");
  document.write("El valor 8 ha salido "+count8+" veces<br>");
  document.write("El valor 9 ha salido "+count9+" veces<br>");
  document.write("El valor 10 ha salido "+count10+" veces<br>");
  document.write("El valor 11 ha salido "+count11+" veces<br>");
  document.write("El valor 12 ha salido "+count12+" veces<br>");
}
*/
