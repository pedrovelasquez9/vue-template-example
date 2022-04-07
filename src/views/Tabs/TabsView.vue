<script setup>
import Info from "@/components/Info/Info.vue";
import Form from "@/components/Form/Form.vue";
import { ref } from "vue";

//Definimos un tab preseleccionado
const selectedTab = ref("Info");

//Definimos un objeto con los componentes que se renderizarán en cada tab
const tabs = { Info, Form };
</script>

<template>
  <section>
    <!-- Mostramos botones para cambiar de componentes -->
    <button v-for="(key, tab) in tabs" @click="selectedTab = tab">
      {{ tab }}
    </button>
    <!-- Renderizamos dinámicamente los componentes con el tag component (cuando un componente deja de renderizarse, éste se desmonta, si lo queremos mantener vivo, tenemos que usar KeepAlive) -->
    <component :is="tabs[selectedTab]"></component>
  </section>
</template>
