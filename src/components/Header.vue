<template>
    <header class="header  bg-red-800">
      <div  class=" flex  flex-col items-center h-40 bg-gray-500 ">
        <img src="../assets/logo izarza 8.png" alt="" class="logo-izarza">
        <h2 class="text-6xl text-indigo-50">RESTAURANTE IZARZA</h2>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/Eventos">Eventos</router-link></li>
          <li><router-link to="/Menus-Cartas">Menus y Cartas</router-link></li>
          <li><router-link to="/Servicios">Servicios</router-link></li>
          <li><router-link to="/Reserva">Reserva</router-link></li>
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
  nav {
  /*   background-color: brown; */
    width: 100%;
    height:10rem ;
  
    

  }
  ul{
    display: flex;
    justify-content: space-between;
     padding: 50px ;
     font-size: 30px;
    font-weight: 500;
 
  }
  ul li {
   /*  border: 3px solid grey; */
    border-radius: 10px;
   transition: 0.2s;
  }
  ul li:hover{
    background-color: gray;
   
  }
  .logo-izarza{
    width:40rem ;
    height:5rem ;
    align-content: center;
    margin-top: 10px;
  }

  
  </style>
  