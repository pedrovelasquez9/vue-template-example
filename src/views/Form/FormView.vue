<!-- Cuando tenemos un script con el attr setup estamos usando la API de Composición, cuando no, la API de opciones -->
<!-- NOTE: SFC + <script setup> syntax for Composition API code examples is the most common usage for Vue developers. -->
<script setup>
import { ref } from "vue";

const jediName = ref("");
const sithCouncil = ref("");
const checkedNames = ref([]);
const selectOptions = ref([
  { text: "Sith", value: "Siths" },
  { text: "Jedi", value: "Jedis" },
]);
const forceUserType = ref("");
const piloto = ref("");
const dynamicTrueValue = ref("si");
const dynamicFalseValue = ref("no");

const submitHandler = () => {
  console.log("Hello there!");
};
</script>

<template>
  <section>
    <form class="form-container">
      <label for="name">Jedi Name: {{ jediName }}</label>
      <input type="text" name="name" id="name" v-model="jediName" />
      <textarea
        name="sith-council"
        id="sith-council"
        v-model="sithCouncil"
      ></textarea>
      <!-- white-space: pre line para mostrar el texto multi línea del modelo -->
      <p style="white-space: pre-line">{{ sithCouncil }}</p>
      <!-- Checkboxes con modelo en un array -->
      <div>Checked names: {{ checkedNames }}</div>

      <input
        type="checkbox"
        id="Darth Maul"
        value="Darth Maul"
        v-model="checkedNames"
      />
      <label for="Darth Maul">Darth Maul</label>

      <input
        type="checkbox"
        id="Darth Sidious"
        value="Darth Sidious"
        v-model="checkedNames"
      />
      <label for="Darth Sidious">Darth Sidious</label>

      <input
        type="checkbox"
        id="Darth Vader"
        value="Darth Vader"
        v-model="checkedNames"
      />
      <label for="Darth Vader">Darth Vader</label>
      <!-- el modificador .prevent implementa el prevent default en el click -->
      <input type="submit" value="Enviar" @click.prevent="submitHandler" />
      <select v-model="forceUserType">
        <!-- El binding de :value soporta también data en formatos distintos a strings, por ejemplo, un objeto -->
        <option v-for="option in selectOptions" :value="option.value">
          {{ option.text }}
        </option>
      </select>

      <div>Selected: {{ forceUserType }}</div>
      <!-- Los atributos true-value y false value son propios de vue y nos sirven para setear valores toggle por defecto en el checkbox por ejemplo, solo funcionan en combinación con el v-model -->
      <label for="piloto">Eres piloto?</label>
      <input
        name="piloto"
        type="checkbox"
        v-model="piloto"
        :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue"
      />
      <span>{{ piloto }}</span>
      <!-- Modificadores: ayudan a formatear la data o a reaccionar a eventos específicos en el binding del input, por ejemplo: .lazy, .number, .trim -->
    </form>
  </section>
</template>

<style>
@import "./FormView.css";
</style>
