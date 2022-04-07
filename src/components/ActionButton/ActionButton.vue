<script setup>
import { defineProps, defineEmits } from "vue";
//Definimos los props que pueden llegar al componente
defineProps(["buttonText"]);
//Definimos los eventos que puede emitir el componente
const events = defineEmits(["change-text"]);

//Función para emitir el evento de forma programática
const emitEvent = () => {
  events("change-text");
};
</script>

<template>
  <!-- Al hacer click en el botón, se llama a la función para emitir el evento hacia el padre -->
  <button @click="emitEvent()" class="btn">{{ buttonText }}</button>
  <slot />
</template>

<style>
@import "./ActionButton.css";
</style>
