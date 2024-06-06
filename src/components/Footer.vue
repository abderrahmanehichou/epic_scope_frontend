<template>
    <footer>
      <!-- Contenido del pie de página -->
      <div  class=" flex justify-between items-center h-40 bg-gray-500">
        <div class="dereccion text-xl text-indigo-50">
        <p>Direccion <br>
        Izarza Bledea,48 <br> 48150 Sondika</p>
        </div>
        <div class="img-log ">
        <img src="/src/assets/imagen1.png" alt="" class="img-zaraza">
      </div>
      <div class="horario text-xl text-indigo-50">
         <p>Horario <br>
            Martes a Domingo <br>
            13:00 a 16.00 <br>
            Sábados <br>
            21:00 a 23:00</p>
     </div>
      </div>
      <div class="rede-social bg-red-800">
      <h2 class="text-xl text-indigo-50 pt-2">Visita nuestras redes Sociales</h2>
      <div class="social-icons flex space-x-4 justify-center items-center">
        <a href="https://x.com/IzarzaSL" target="_blank"><font-awesome-icon :icon="['fab', 'x-twitter']" class="text-darck-500 text-2xl" /> </a>
        <a href="https://www.facebook.com/RestauranteIzarza/?locale=ca_ES" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="text-blue-600 text-2xl" /></a>
        <a href="https://www.instagram.com/izarza1530"><font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 text-2xl" /></a>
      </div>
      <div class="penascal-colaboraction  sm:-ml-2 flex justify-center items-center">
        <p class="text-xl text-indigo-50">Izarza es una empresa de Peñascal Kooperativa</p>
        <a href="https://www.grupopenascal.com/" target="_blank">
        <img src="../assets/penascal-logo-1 6.png" alt="" class="penascal">
      </a>
      </div>
    </div>
    <!--   <p>Este  footer.</p> -->
    </footer>
  </template>
  
  <script setup>


  </script>
  
  <style scoped>
  /* Estilos específicos del componente Footer */
  footer {
 /*    background-color: #635d5d; */
   /*  padding: 20px; */
    text-align: center;
  }
.img-zaraza{
  width: auto;
  height: 10rem;
}
.horario{ margin-top: 5px;
  margin-right: 20rem;
}
.dereccion{
  margin-left: 20rem;
}
/* .dereccion p{
  font-size:16px;
} */
.horario p{
  font-size: 16px;
}
.penascal{
  width: 8rem;
  height: 2rem;
  margin-bottom: 20px;
  margin-left: 20px;
}

  </style>
  