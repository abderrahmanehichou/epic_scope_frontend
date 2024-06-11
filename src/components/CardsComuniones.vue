
<template>
    <div class="bg-red-800">
    <h2 class="mb-2 text-2xl font-bold text-white text-center">Menu comuniones</h2>
        <div class="inline-grid grid-cols-2 items-center gap-60 ml-96 pl-80 mb-12">
            <figure
              ref="flipContainer"
              @mousemove="handleMouseMove"
              @mouseleave="resetRotation"
              @keydown="handleKeyDown"
              tabindex="0"
              class="flip-container relative h-96 w-64 cursor-pointer rounded-3xl "
              v-for="menu in menues_comuniones"  :key="menues_comuniones"
            > 
              <!-- lado de adelante -->
        
              <div
                class="flip-card-front  bg-white absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center rounded-3xl bg-cover bg-center transition-all duration-1000 ease-in-out"
                
                ><h2 class="mb-2 text-2xl font-bold text-red-800">{{ menu }}</h2>
                
                <img
                 src="../assets/comuniones.png" 
                  alt="Bald Eagle Portrait"
                  class="size-24 w-40 h-30 object-cover"
                /> 
        
                </div>
        
              <!-- lado de atras -->
        
              <figcaption
                class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-red-800 p-4 text-white transition-all duration-1000 ease-in-out"
              >
          
               
                <a href=""><h3 class=" text-white font-bold text-2xl bg-red-800 rounded-md ">Ver Menu</h3></a>
        
                
                
              </figcaption> 
            </figure>
          </div>
        </div>
        </template>
        
        <script setup>
        import { ref } from "vue";
        const menues_comuniones = ref(["Berreteaga","Errekalde","Goietxea","Kumea"]);
      
        
        const flipContainer = ref(null);
        const isFlipped = ref(false);
        
        
        const handleMouseMove = (event) => {
          const rect = flipContainer.value.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;
          const rotateX = (mouseY / rect.height - 0.5) * 50;
          const rotateY = -(mouseX / rect.width - 0.5) * 50;
          flipContainer.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        
        
        const resetRotation = () => {
          flipContainer.value.style.transform = "";
        };
        
        const handleFlip = () => {
          if (isFlipped.value) {
            flipContainer.value.classList.remove("is-flipped");
            isFlipped.value = false;
          } else {
            flipContainer.value.classList.add("is-flipped");
            isFlipped.value = true;
          }
        };
        
        
        const handleKeyDown = (event) => {
          if (event.key === "Enter") {
            handleFlip();
          }
        };
        </script>
        
        <style scoped>
        
        
        .flip-container {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
        
        
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
          transform-style: preserve-3d;
        }
        
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        
        .flip-container:hover .flip-card-front {
          transform: rotateY(180deg);
        }
        
        .flip-container:hover .flip-card-back {
          transform: rotateY(360deg);
        }
        
        
        .flip-container.is-flipped .flip-card-front {
          transform: rotateY(180deg);
        }
        
        .flip-container.is-flipped .flip-card-back {
          transform: rotateY(360deg);
        }
        
        
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
        </style>

