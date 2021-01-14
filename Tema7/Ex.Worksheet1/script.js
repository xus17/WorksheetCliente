/*  EX5 */
  $('ul:nth-child(1) li:first-child').hide();

/*EX8*/
//Cambia el tamaño de la fuente de las 3 noticias
  $('div').css("font-size","1.5rem");

// Al pulsar sobre cada título se debe mostrar u ocultar este
  $('p').on("click",function(){
    if($(this).is(":visible")){
      $(this).hide();
    }else{
      $(this).show();
    }

  });

//Al colocar el raton se cambia el fondo
  $('p').hover(
      function(){
          $(this).css('background-color','blue');
      }, function() {
          $(this).css('background-color','white');
        }
  )
