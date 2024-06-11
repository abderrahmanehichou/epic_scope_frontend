<template>
  <div class="body">
    <div class="bg-cover relative">
      <img src="../assets/1717411703540.webp" alt="Descripción de la imagen" class="w-full h-full object-cover">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 class="text-4xl font-bold">RESTAURANTE IZARZA</h1>
      </div>
    </div>

    <div class="bg-red-800 flex gap-10 p-5 h-3/6 mt-1">
     <div class="rounded-lg p-8 flex flex-col justify-between mr-40 ml-40 bg-gray-500 bg-opacity-5">
        
          <h3 class="text-white text-3xl font-bold text-center ">RESTAURANTE IZARZA</h3>
          <p class="text-white text-2xl text-center p-20 text-small-center">
  El restaurante está ubicado en el edificio de una antigua escuela de barriada, que <span class="text-green-600">Peñascal S. Coop</span>, rehabilitó para instalar <span class="text-green-600">UNA ESCUELA DE HOSTELERÍA </span> que funciona de manera paralela a la del Restaurante e imparte formación a aquellas personas que quieran introducirse en el mundo de la Hostelería, o bien a quienes estando ya en el sector deseen lograr un mayor nivel de profesionalidad a través de los cursos de reciclaje que en ella se organicen y un restaurante con un compromiso social que abre al público.
</p>


        
       
      </div>
      <div class="flex flex-col justify-between ml-10">
  <h3 class="text-white text-3xl font-bold text-center">Conoce este lugar impresionante</h3>

  <div class="flex flex-wrap justify-center items-center gap-28">
    <img src="../assets/8793-removebg-preview 4.png" alt="" class="with"> 
    <img src="../assets/descarga__2_-removebg-preview 4.png" alt="" class="with">
    <img src="../assets/images-removebg-preview 4.png" alt="" class="with">
  </div>

  <img src="../assets/Izarza_historia 5.png" alt="" class="with-">
</div>

    </div>
  </div>
</template>

<script>
 
</script>

<style scoped>
  .bg-cover {
    height: 300px; 
    background-size: cover;
    position: relative;
  }

  .bg-gray-500 {
    width: 50rem;
    height: 50rem;
  } 
  .with{
    width:10rem ;
  height:auto ;}
  .with-{
    width:60rem;
    height: 35rem;  
  }
  @media screen and (max-width: 1280px) {
  .bg-red-800 {
    text-align: center; 
    align-items: center; 
  }
  .flex-wrap-mobile {
  display: flex;
  flex-wrap: nowrap; 
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch; 
  gap: 1rem; 
  padding: 1rem 0; 
}
  .bg-gray-500 {
    width: 90%; 
    max-width: 600px; 
    margin: 0 auto; 
  }

  .with {
  flex: 0 0 auto; 
  width: calc(33.333% - 1rem); 
  max-width: 200px; 
  height: auto; 
}

  .with- {
    width: 100%;
    height: auto;
    margin: 0 auto 1rem; 
  }

  .bg-red-800 {
    flex-direction: column; 
    gap: 1rem; 
    padding: 2rem; 
  }
}

@media screen and (max-width: 640px) {
  .text-3xl {
    font-size: 2rem; 
  }

  .with {
    width: calc(33.333% - 1rem); 
  }

  .with- {
    width: 100%; 
    height: auto; 
    margin-top: 1rem; 
  }
  .text-small-center {
    font-size: 0.9rem; 
    text-align: center; 
    width: 130%; 
    margin:  -2rem; 
  }
}



</style>