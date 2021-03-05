<template>
  <div id="app">
    <h1>Project Vue.js Jesús Manuel González Santiago</h1>

    <hr />

    <h2>
      Tareas pendientes {{ totalCompletados }} de un total de {{ totalTareas }}
    </h2>
    <button style="background-color: red" @click="borrarCompletadas()">
      Borrar Tareas completadas
    </button>

    <hr />

    <div class="inputs">
      <input
        type="text"
        name=""
        v-model="valor"
        v-on:keyup.enter="anadirNota()"
        v-on:keyup="teclapulsada()"
        placeholder="¿Qué quieres recordar?"
        class="tocho"
      />
      <input type="text" name="" value=""  v-model="empiezapor" class="tocho2" />
    </div>

    <div v-for="(nota, index) in notas" class="principal" v-bind:key="nota.id">
      <div class="dvLinea">
        {{ nota.Comentario }}
        <div class="">
          <input v-if="nota.Completado" v-on:click="cambiarEstado(index,nota.id)" type="checkbox" id="cbox2" checked  width="100px"> 
          <input v-if="!nota.Completado" v-on:click="cambiarEstado(index,nota.id)" type="checkbox" id="cbox2"   width="100px">
          <label id="textoCheck" for="cbox2">Completado</label>
          <button v-if="nota.Prioridad==1" style="background-color: blue;color:white;" v-on:click="cambiarPrioridad(index,nota.id)">Low</button>
          <button v-if="nota.Prioridad==2" style="background-color: rgb(215, 233, 49);color:white;" v-on:click="cambiarPrioridad(index,nota.id)">Medium</button>
          <button v-if="nota.Prioridad==3" style="background-color: rgb(255, 102, 0);color:white;" v-on:click="cambiarPrioridad(index,nota.id)">High</button>
          <button @click="borrar(nota.id)">Borrar</button>
        </div>
      </div>
      <div class="dvLinea2">
        {{nota.Fecha}}
        {{listaNotasFiltrada}}
      </div>
    </div>
  </div>
</template>

<script>

import {db} from "./db";

export default {
  name: "App",


  data() {
    return {
      valor: "",
      contador: "0",
      empiezapor: "",
      notas: []
    };
  },
  created() {
  },
  mounted :function(){
     

  },
  firestore:{
    notas : db.collection("notas")
  },
  methods: {
    anadirNota: function () {

      if (isNaN(this.valor)) {
        var Fec = new Date();
        var mes = Fec.getMonth()+1;
        var fecha = Fec.getDate() + "/" + mes + "/" + Fec.getFullYear();
        

        db.collection("notas").add({
          Comentario: this.valor,
          Completado: false,
          Fecha: fecha,
          Prioridad: 1,
        });
        this.contador++;
        this.valor = "";
      }
    },
    borrar: function (id) {
      console.log(id);
      db.collection("notas").doc(id).delete();
    },
    borrarCompletadas: function () {
      for(var i=0;i<this.notas.length;i++){
        if(this.notas[i].Completado){
          db.collection("notas").doc(this.notas[i].id).delete();
        }
      }
    },
    cambiarEstado: function (position,id) {
      if (this.notas[position].Completado) {
        db.collection("notas")
          .doc(id)
          .update({ Completado: false });
      } else {
        db.collection("notas")
          .doc(id)
          .update({ Completado: true });
      }
    },
    cambiarPrioridad: function(position,id) {
      
      this.notas[position].Prioridad+=1;
      db.collection("notas").doc(id).update({ Prioridad: this.notas[position].Prioridad });
           if(this.notas[position].Prioridad==4){
            this.notas[position].Prioridad=1;
            db.collection("notas").doc(id).update({ Prioridad: this.notas[position].Prioridad });
           }
    },
    
    teclapulsada: function () {
      if (this.valor.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },
  },
  computed: {
    totalTareas: function () {
      return this.notas.length;
    },
    totalCompletados: function () {
      let total = 0;
      for (var i = 0; i < this.notas.length; i++) {
        if (this.notas[i].Completado == false) {
          total++;
        }
      }
      return total;
    },
    listaNotasFiltrada: function () {
      if (this.empiezapor == "") {
        return "";
      } else {
        return this.notas.filter((nota) => {
          console.log("Almendra");
          if (nota.Comentario.indexOf(this.empiezapor) >= 0) {
            return true;
          } else {
            return false;
          }
        });
      }
    }
  }

};
</script>

<style>
body {
  background-color: rgb(54, 47, 46);
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

div,
h1,
h2 {
  color: white;
}

hr {
  width: 90%;
  margin: 1rem;
}

.tocho {
  width: 80%;
  height: 7rem;
  font-size: 30px;
  margin-left: 11rem;
}

.tocho2 {
  margin-top: 1rem;
  width: 80%;
  height: 5rem;
  font-size: 30px;
  margin-left: 11rem;
}
.principal {
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dvLinea {
  display: flex;
  font-size: 30px;
  margin-top: 1rem;
  width: 75%;
  background-color: rgb(117, 103, 110);
  padding: 1rem;
  justify-content: space-around;
}

.dvLinea div{
  width: 40%;
  display: flex;
  justify-content: space-between;
}
#cbox2 {
  transform: scale(3);
  padding-left: 10%;
}
.inputs {
  display: flex;
  flex-direction: column;
}
</style>
