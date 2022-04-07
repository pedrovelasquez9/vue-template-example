<script setup>
import { ref, onMounted } from "vue";
//Importamos un componente ActionButton
import ActionButton from "@/components/ActionButton/ActionButton.vue";

//Con ref podemos crear una referencia a un nodo del DOM para poder usarla y acceder/cambiar sus atributos como cuando lo hacemos con la api del dom de JS
const title = ref(null); //El ref debe tener el mismo nombre cuando se asocia al elemento del DOM
const titleStyle = ref({ color: "blue" });
//La referencia al elemento estará disponible tras el primer render, es decir, tras la ejecución del hook onMounted
onMounted(() => {
  console.log(title.value.classList.add("test"));
  title.value.innerText = "cambio el texto desde el hook";
});

//Ejecutamos la función cuando el padre reacciona al listener de eventos del componente hijo
const changeText = () => {
  titleStyle.value.color === "blue"
    ? (titleStyle.value = { color: "red" })
    : (titleStyle.value = { color: "blue" });
};
</script>

<template>
  <!-- Nótese el nombre del ref y el nombre de la constante que lo contiene a nivel de componente (son el mismo) -->
  <section>
    <h1 ref="title" :style="titleStyle">Título con attr ref</h1>
    <!-- Renderizamos el componente hijo y asignamos un evento como listener del emiter "change-text", además, le pasamos buttonText como prop -->
    <ActionButton @change-text="changeText()" buttonText="Cambiar texto">
      Texto renderizado a través de la etiqueta slot del componente hijo
    </ActionButton>
  </section>
</template>

<style></style>
