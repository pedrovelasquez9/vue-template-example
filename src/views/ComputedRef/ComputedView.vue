<!-- Cuando tenemos un script con el attr setup estamos usando la API de Composición, cuando no, la API de opciones -->
<!-- NOTE: SFC + <script setup> syntax for Composition API code examples is the most common usage for Vue developers. -->
<script setup>
import { ref, computed } from "vue";

const showSection = ref(true);
const showInnerSection = ref(true);
const isBold = ref(false);

//Computed references: las referencias computadas "siguen" los valores de los que dependen para actualizarse de forma automática con el cambio de estos valores referenciales, esto solo funciona como getter, si queremos editar un computed value, deberemos definir en él la función get y set
const jediLightsabers = {
  jedi: "Obi-Wan",
  lightsabers: ["blue"],
};

//Crear un valor computado del objeto jediLightsabers (este valor actúa como los refs y puede accederse a él de la misma forma, por ejemplo, a través del .value)
const computedJedis = computed(() => {
  return jediLightsabers.lightsabers.length > 1
    ? "Ha tenido más de un sable"
    : "No ha tenido más de un sable";
});

const computedClass = computed(() => {
  return { bold: isBold.value };
});
</script>

<template>
  <section v-if="showSection">
    <p :class="computedClass" v-show="showInnerSection">
      Jedi: {{ jediLightsabers.jedi }} {{ computedJedis }}
    </p>
  </section>
</template>

<style>
/* @import "./CounterView.css"; */
</style>
