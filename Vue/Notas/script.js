
var app = new Vue({
  el: '#app',
  data: {
    valor: '',
    listarecord: [],
    contador: 0,
    isButtonDisabled: true,
    empiezapor: ''
  },
  mounted() {
    if (localStorage.listaTareas) {
      this.listarecord = JSON.parse(localStorage.listaTareas);
        this.contador =this.listarecord.length;
    }
  },
  methods: {
    anadirRecord: function() {
      if (isNaN(this.valor)) {
        this.listarecord.push({
          id: "id"+this.contador,
          prioridad: 1,
          contenido: this.valor,
          estado: false,
          fecha: new Date()
        });
        this.contador+=1;
        this.valor = '';
        this.actualizarLocalStorage();
      }
    },
    cambiarEstado: function(position) {
      if (this.listarecord[position].estado) {
        this.listarecord[position].estado = false;
      } else {
        this.listarecord[position].estado = true;
      };
      this.actualizarLocalStorage();
    },
    cambiarPrioridad: function(index) {
      
      this.listarecord[index].prioridad+=1;
           if(this.listarecord[index].prioridad==4){
            this.listarecord[index].prioridad=1;
           }
      
      
      this.actualizarLocalStorage();
    },
    borrar: function(position) {
      this.listarecord.splice(position, 1);
      this.actualizarLocalStorage();
    },
    teclapulsada: function() {
      if (this.valor.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }

    },
    borrarCompletadas: function() {
      this.listarecord = this.listarecord.filter((nota) => {

        return !nota.estado;

      })
    },
    actualizarLocalStorage: function() {
      localStorage.listaTareas = JSON.stringify(this.listarecord);
    },
    extraerfecha: function(fecha2){
        var fecha = new Date(fecha2);
        var mes = fecha.getMonth()+1;
        return fecha.getDate() + "/" + mes + "/" + fecha.getFullYear();
    }
  },
  computed: {
    totalTareas: function() {
      return this.listarecord.length;
    },
    totalCompletados: function() {
      let total = 0;
      for (var i = 0; i < this.listarecord.length; i++) {
        if (this.listarecord[i].estado == false) {
          total++;
        }
      }
      return total;
    },
    listaRecordatoriosFiltrada: function() {
      if (this.empiezapor == "") {
        return this.listarecord;
      } else {
        return this.listarecord.filter((recordatorio) => {
          if ((recordatorio.contenido.indexOf(this.empiezapor))>=0) {
            return true;
          } else {
            return false;
          }
        })
      }
    }

  }
})
