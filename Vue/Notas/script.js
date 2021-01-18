var app = new Vue({
  el: '#app',
  data: {
    valor: '',
    listarecord: [],
    contador: '0'
  },
  methods: {
    anadirRecord: function() {
      if (isNaN(this.valor)) {
        this.listarecord.push({
          prioridad: 0,
          contenido: this.valor,
          estado: false,
          fecha: new Date()
        });
        this.contador++;
        this.valor = '';
      }
    },
    cambiarEstado: function(event, position) {
      alert(this.listarecord[position].contenido);
    },
    borrar: function(position) {
      this.listarecord.splice(position, 1);
    }
  }
})
