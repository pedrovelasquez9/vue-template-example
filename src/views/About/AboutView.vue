<!-- Cuando tenemos un script con el attr setup estamos usando la API de Composición, cuando no, la API de opciones -->
<!-- NOTE: SFC + <script setup> syntax for Composition API code examples is the most common usage for Vue developers. -->
<script setup>
import { ref, onMounted, nextTick, computed } from "vue";

/**
 * Definimos un contador y una función para incrementar su valor y probar el two way data binding desde la plantilla
 * El ref se usa para definir un state con un valor inicial y que vue haga el trazado de sus cambios
 */
const counter = ref(0);
const isBold = ref(false);
const showSection = ref(true);
const showInnerSection = ref(true);
const jediName = ref("");

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

//Definimos una variable en el componente para hacer un binding del attr "id" en la plantilla
const prueba = "Hola mundo";

//Definimos una constante href para hacer el binding del atributo de la etiqueta "a", este binding también se puede hacer con eventos, por ejemplo, click, focus, etc.
const aTagAttr = "href";
const redirectUrl = "https://google.com";

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

//Data para el v-for
const jediCouncil = [
  "Yoda",
  "Mace-Windu",
  "Obi-Wan Kenobi",
  "Adi Galia",
  "Kit Fisto",
  "Anakin Skywalker",
];

const submitHandler = () => {
  console.log("Hello there!");
};
</script>

<template>
  <div class="about">
    <h1 :id="prueba">This is an about page</h1>
    <a :[aTagAttr]="redirectUrl">Mi enlace con binding</a>
    <button @click="increaseCounter">Incrementar contador</button>
    <p>{{ counter }}</p>
  </div>
  <section v-if="showSection">
    <p :class="computedClass" v-show="showInnerSection">
      Jedi: {{ jediLightsabers.jedi }} {{ computedJedis }}
    </p>
  </section>
  <section>
    <ul>
      <li v-for="(jedi, index) in jediCouncil">{{ index + 1 }} {{ jedi }}</li>
    </ul>
    <form>
      <label for="name">Jedi Name: {{ jediName }}</label>
      <input type="text" name="name" id="name" v-model="jediName" />
      <input type="submit" value="Enviar" @click.prevent="submitHandler" />
    </form>
  </section>
</template>

<style>
@import "./AboutView.css";
</style>
