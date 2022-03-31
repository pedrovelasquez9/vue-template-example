<script setup>
import { ref, watch } from "vue";

const order = ref("");
const trooperAnswer = ref("");

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
