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
@import "./AboutView.css";
</style>
