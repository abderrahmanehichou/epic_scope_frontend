<template>
  <div class="bg-white">
    <h2 class="mb-2 text-2xl text-center font-bold text-red-800 underline">Menu especial</h2>
    <h2 class=" text-2xl text-center font-bold text-red-800 mb-14">(Fines de semana y a diario)</h2>
    <div class="grid-container">
      <figure
        ref="flipContainer"
        @mousemove="handleMouseMove"
        @mouseleave="resetRotation"
        @keydown="handleKeyDown"
        tabindex="0"
        class="flip-container relative h-96 w-64 cursor-pointer rounded-3xl"
        v-for="menu in menues_especial"
        :key="menu"
      >
        <!-- lado de adelante -->
        <div
          class="flip-card-front bg-red-800 absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center rounded-3xl bg-cover bg-center transition-all duration-1000 ease-in-out"
        >
          <h2 class="mb-2 text-2xl font-bold text-white">{{ menu }}</h2>
          <img
            src="../assets/comuniones.png"
            alt="Bald Eagle Portrait"
            class="imagen-comunion w-60 h-60 object-cover mb-0"
          />
        </div>
        <!-- lado de atras -->
        <figcaption
          class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-red-800 p-4 transition-all duration-1000 ease-in-out"
        >
          <a href=""><h3 class=" text-red-800 font-bold text-2xl bg-white rounded-md ">Ver Menu</h3></a>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

      
      <script setup>
      import { ref } from "vue";
      
      const menues_especial = ref(["Lubarrieta", "Aixerrota", "Paseo por la carta", "Kumea"]);
      const flipContainer = ref(null);
      const isFlipped = ref(false);
      
      // efecto rotacion
      const handleMouseMove = (event) => {
        const rect = flipContainer.value.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const rotateX = (mouseY / rect.height - 0.5) * 50;
        const rotateY = -(mouseX / rect.width - 0.5) * 50;
        flipContainer.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      // reseteo rotacion
      const resetRotation = () => {
        flipContainer.value.style.transform = "";
      };
      
      // cambiovalor is fliped
      const handleFlip = () => {
        if (isFlipped.value) {
          flipContainer.value.classList.remove("is-flipped");
          isFlipped.value = false;
        } else {
          flipContainer.value.classList.add("is-flipped");
          isFlipped.value = true;
        }
      };
      
      // Triggering handleFlip Function on pressing 'Enter' Key
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handleFlip();
        }
      };
      </script>
      
     <style scoped>
     /*perspectiva*/
     .flip-container {
       perspective: 1000px;
       transform-style: preserve-3d;
       transition: transform 0.5s ease;
       height: 45rem;
       margin: 10rem 0 5rem 0;
     }
     
     /* Hiding The Back Of Card */
     .flip-card-front,
     .flip-card-back {
       backface-visibility: hidden;
       box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
       transform-style: preserve-3d;
       height: 45rem;
     }
     
     .imagen-comunion {
       width: 100%;
       margin: 0 auto;
       margin-top: 10rem;
       height: 60%;
     }
     
     /* Setting The Default Postion Of The Back Of The Card */
     .flip-card-front {
       height: 25rem;
     }
     .flip-card-back {
       transform: rotateY(180deg);
     }
     
     /* Flipping The Card On Hover */
     .flip-container:hover .flip-card-front {
       transform: rotateY(180deg);
     }
     
     .flip-container:hover .flip-card-back {
       transform: rotateY(360deg);
     }
     
     /* Flipping The Card On 'Enter' Key Event */
     .flip-container.is-flipped .flip-card-front {
       transform: rotateY(180deg);
     }
     
     .flip-container.is-flipped .flip-card-back {
       transform: rotateY(360deg);
     }
     
     /* Adding Depth To Elements On The Back */
     .flip-container .flip-card-back h2 {
       transform: translateZ(40px);
     }
     .flip-container .flip-card-back img {
       transform: translateZ(50px);
     }
     .flip-container .flip-card-back h3 {
       transform: translateZ(40px);
     }
     .flip-container .flip-card-back div {
       transform: translateZ(30px);
     }
     
     .grid-container {
       display: grid;
       justify-items: center;
       grid-template-columns: repeat(2, minmax(0, 1fr));
       gap: 1rem;
     }
     
     .flip-container {
       cursor: pointer;
       position: relative;
     }
     
     .flip-card-front {
       text-align: center;
       padding: 20px;
     }
     
     /* Media query para ajustar la vista en pantallas más pequeñas */
     @media screen and (max-width: 768px) {
       .grid-container {
         grid-template-columns: repeat(1, minmax(0, 1fr));
         justify-items: center;
       }
     
       .flip-container {
         margin: 5rem auto;
       }
     }
     </style>
     