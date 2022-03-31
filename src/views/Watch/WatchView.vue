<script setup>
import { ref, watch } from "vue";

// Con watch podemos hacer seguimiento de objetos, refs, arrays, getters, computed refs, etc. de forma parecida al computed ref, pero con la posibilidad de mutar lo que necesitemos dentro del callback

const order = ref("");
const trooperAnswer = ref("");

//"Observamos" el ref "order" para cambiar el valor de trooperAnswer dependiendo del número de orden identificado en el string
watch(order, (newOrder) => {
  if (order.value.indexOf("66") > -1) {
    trooperAnswer.value = "Yes, my lord";
  } else {
    trooperAnswer.value = "Rebel scum!";
  }
});
</script>

<template>
  <section>
    <label for="">Darth Sidious: </label>
    <input type="text" v-model="order" />
    <p>Trooper: {{ trooperAnswer }}</p>
  </section>
</template>

<style></style>
