<template>
    <div>
      
      <h1 class="text-3xl font-bold underline bg-blue-100">Eventos</h1>
      <!-- Agrega aquí los componentes específicos para la vista de Eventos -->
   
  <DecEventos />
  <DecMenus />
  <CondicionEventos />
    </div>
  </template>
  
  <script setup>
  import DecEventos from '../components/DecEventos.vue';
  import DecMenus from '../components/DecMenus.vue';
  import CondicionEventos from '../components/CondicionEventos.vue';
  </script>
  