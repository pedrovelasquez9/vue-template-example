<script setup>
import TheWelcome from "@/components/TheWelcome/TheWelcome.vue";
import { provide, ref } from "vue";

const msg = ref("Hola valor inyectable");

const updateRef = () => {
  msg.value = "El valor ha cambiado de forma reactiva";
};

// Proveemos un valor reactivo y la función que lo edita para que cualquier componente hijo acceda a ambas cosas a través del inject
provide("message", { msg, updateRef });
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
