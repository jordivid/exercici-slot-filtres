<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Pare @enviar="mostrarAlerta" @ocultar="amagarAlerta">
      <div class="alert alert-info" v-if="mostrar === true">Heu tancat el modal</div>
    </Pare>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Pare from './components/Pare.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pare
  },
  methods: {
    mostrarAlerta() {
      this.mostrar = true;
    },
    amagarAlerta() {
      this.mostrar = false;
    }
  },
  data() {
    return {
      mostrar: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
