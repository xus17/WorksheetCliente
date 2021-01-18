var app = new Vue({
    el: '#miAplicacion',
    data: {
      nuevoRecordatorio: "",
      listaRecordatorio: []
    },

    methods:{
        anadirRecordatorio: function(){
            this.listaRecordatorio.push({
                titulo:this.nuevoRecordatorio,
                prioridad: 0,
                fechaCreacion: new Date(),
                completado: false,});
                this.nuevoRecordatorio = "";
            },
        cambiarEstadoTarea: function(posicion){
            // Muestra posicion de los elementos
            /console.log(posicion)/


        },
        eliminarTarea: function(posicion){
            // Borrar elementos lista
            this.listaRecordatorio.splice(posicion,1);
        },

        cambiarCompletado: function(posicion) {
          console.log(this.listaRecordatorio[posicion]);
            if(this.listaRecordatorio[posicion].completado){
                this.listaRecordatorio[posicion].completado=false;
            } else {this.listaRecordatorio[posicion].completado=true};

            console.log(this.listaRecordatorio[posicion].completado);


        },
    }

  })
