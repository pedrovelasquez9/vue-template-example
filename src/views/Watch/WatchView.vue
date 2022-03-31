<script setup>
import { ref, watch, watchEffect } from "vue";

// Con watch podemos hacer seguimiento de objetos, refs, arrays, getters, computed refs, etc. de forma parecida al computed ref, pero con la posibilidad de mutar lo que necesitemos dentro del callback

const order = ref("");
const trooperAnswer = ref("");
const url = ref("https://jsonplaceholder.typicode.com/todos/1");
const data = ref([]);

//"Observamos" el ref "order" para cambiar el valor de trooperAnswer dependiendo del número de orden identificado en el string
watch(order, (newOrder) => {
  if (order.value.indexOf("66") > -1) {
    trooperAnswer.value = "Yes, my lord";
  } else {
    trooperAnswer.value = "Rebel scum!";
  }
});

//WatchEffect hace lo mismo que el watch, pero de forma implícita "sigue" todos los refs que estén involucrados en la ejecución del callback
watchEffect(async () => {
  const response = await fetch(url.value);
  data.value = await response.json();
});

// Los watchers se ejecutan antes del update del componente, por lo que si queremos acceder al DOM actualizado tras el watcher, podemos usar watchPostEffect o pasarle {flush: 'post'} tras el callback del watch

//Los watchers se detienen de forma automática en el unmount del componente, a menos que los hayamos definido dentro de una función asíncrona, en este caso, deberemos detenerlos de forma manual, por ejemplo:
// const unwatch = watchEffect(() => {})

// // ...later, when no longer needed
// unwatch()
</script>

<template>
  <section>
    <label for="">Darth Sidious: </label>
    <input type="text" v-model="order" />
    <p>Trooper: {{ trooperAnswer }}</p>
    <br />
    <input type="text" v-model="url" />
    <p>{{ data }}</p>
  </section>
</template>

<style></style>
