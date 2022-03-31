<!-- Cuando tenemos un script con el attr setup estamos usando la API de Composición, cuando no, la API de opciones -->
<!-- NOTE: SFC + <script setup> syntax for Composition API code examples is the most common usage for Vue developers. -->
<script setup>
import { ref, onMounted, nextTick } from "vue";

/**
 * Definimos un contador y una función para incrementar su valor y probar el two way data binding desde la plantilla
 * El ref se usa para definir un state con un valor inicial y que vue haga el trazado de sus cambios
 */
const counter = ref(0);

//Definimos una función para incrementar el contador definido en el state a través del binding del template
const increaseCounter = () => {
  counter.value++;
  //Podemos usar nextTick para acceder al dom actualizado una vez se haya aplicado el cambio en el valor del state
  nextTick(() => {
    console.log(`El DOM se ha actualizado, ahora el valor es ${counter.value}`);
  });
};

//Hook para ejecutar cosas cuando el componente se ha montado
onMounted(() => {
  console.log(counter.value);
});
</script>

<template>
  <div>
    <h1>Ejemplo de contador</h1>
    <button @click="increaseCounter">Incrementar contador</button>
    <p>{{ counter }}</p>
  </div>
</template>

<style>
/* @import "./CounterView.css"; */
</style>
