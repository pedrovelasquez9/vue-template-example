<!-- Cuando tenemos un script con el attr setup estamos usando la API de Composición, cuando no, la API de opciones -->
<!-- NOTE: SFC + <script setup> syntax for Composition API code examples is the most common usage for Vue developers. -->
<script setup>
//Definimos una variable en el componente para hacer un binding del attr "id" en la plantilla
const prueba = "Hola mundo";

//Definimos una constante href para hacer el binding del atributo de la etiqueta "a", este binding también se puede hacer con eventos, por ejemplo, click, focus, etc.
const aTagAttr = "href";
const redirectUrl = "https://google.com";
//Data para el v-for
const jediCouncil = [
  "Yoda",
  "Mace-Windu",
  "Obi-Wan Kenobi",
  "Adi Galia",
  "Kit Fisto",
  "Anakin Skywalker",
];
</script>

<template>
  <div class="about">
    <h1 :id="prueba">This is an about page</h1>
    <a :[aTagAttr]="redirectUrl">Mi enlace con binding</a>
  </div>
  <ul>
    <li v-for="(jedi, index) in jediCouncil">{{ index + 1 }} {{ jedi }}</li>
  </ul>
</template>

<style>
/* @import "./BindingView.css"; */
</style>
