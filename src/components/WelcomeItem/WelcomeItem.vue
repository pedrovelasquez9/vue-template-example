<!-- Podemos tener renderless components, son componentes que solo tienen lógica y un slot que envían data al componente padre para que éste se encargue de la renderización -->
<template>
  <div class="item">
    <i>
      <!-- En los slots se renderiza el contenido pasado desde el componente padre, en este caso, TheWelcome -->
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <!-- Le enviamos un prop message al componente padre, esto también puede hacerse con un ref y haciendo uso del v-bind="mensaje" o el atajo :message="hola padre" -->
        <slot name="heading" message="hola padre"></slot>
      </h3>
      <!-- Slot por defecto (no tiene nombre) y contiene un valor por defecto en caso de que no llegue ningún contenido desde el componente padre -->
      <slot test="hola">Default value</slot>
    </div>
  </div>
</template>

<style scoped>
@import "./WelcomeItem.css";
</style>
