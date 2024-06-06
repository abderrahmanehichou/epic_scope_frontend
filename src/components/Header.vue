<template>
    <header class="header  bg-red-800 h-60 w-100 pb-4">
      <div  class=" flex  flex-col items-center h-15 bg-gray-500 p-5">
        <img src="../assets/logo izarza 8.png" alt="" class="logo-izarza brightness-150">
        <h2 class="text-4xl text-indigo-50">RESTAURANTE IZARZA</h2>
      </div>
      <nav class=" w-90 h-20 ">
        <ul class=" w-90 flex justify-evenly font-bold text-xl p-8">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/Eventos">Eventos</router-link></li>
          <li><router-link to="/Menus-Cartas">Menus y Cartas</router-link></li>
         <li><router-link to="/Servicios">Servicios</router-link></li> 
         <!--  <li><router-link to="/Reserva">Reserva</router-link></li> -->
          <li><router-link to="/Contact">Contacto</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  /* Estilos del header */
/*   nav {
     background-color: brown; 
    width: 50rem;
    height:50rem; 
  
    

  } */
 /*  ul{
    display: flex;
    justify-content: space-between;
     padding: 50px ;
     font-size: 30px;
    font-weight: 500;
    
 
  } */
  ul li {
   /*  border: 3px solid grey; */
    border-radius: 10px;
   transition: 0.2s;
   color: white;
  }
  ul li:hover{
    background-color: gray;
   
  }
  .logo-izarza{
    width:200px ;
    height:auto ;
    align-content: center;
    margin-top: 10px; 
  }

   
  </style>
  