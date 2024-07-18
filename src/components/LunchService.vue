<template>
  <div class="bg-red-800">
    <h2 class="m-10 pt-10 text-2xl font-bold text-white text-center">Servicio de Lunch </h2>
    <div class="grid-container">
      <figure
        ref="flipContainer"
        @mousemove="handleMouseMove"
        @mouseleave="resetRotation"
        @keydown="handleKeyDown"
        tabindex="0"
        class="flip-container relative h-96 w-64 cursor-pointer rounded-3xl"
        v-for="menu in menues_lunch"
        :key="menu"
      >
        <!-- lado de adelante -->
        <div
          class="flip-card-front bg-white absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center rounded-3xl bg-cover bg-center transition-all duration-1000 ease-in-out"
        >
          <h2 class="mb-2 text-2xl font-bold text-red-800">{{ menu }}</h2>
          <img
            src="../assets/comuniones.png"
            alt="Bald Eagle Portrait"
            class="size-24 w-40 h-30 object-cover"
          />
        </div>
        <!-- lado de atras -->
        <figcaption
          class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-slate-100 p-4 text-red-800 transition-all duration-1000 ease-in-out"
        >
          <a href=""><h3 class="text-white font-bold text-2xl bg-red-800 rounded-md p-2">Ver Menu</h3></a>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menues_lunch = ref(["Lunch 1", "Lunch 2", "Lunch 3", "Lunch 4"]);
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
/* Estilos comunes */
.flip-container {
  perspective: 1000px;
       transform-style: preserve-3d;
       transition: transform 0.5s ease;
       height: 45rem;
       margin: 10rem 0 5rem 0;
     }

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
       box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
       transform-style: preserve-3d;
       height: 45rem;
     }
     .flip-card-front {
       height: 25rem;
     }
.flip-card-front {
  transform: rotateY(0deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-container:hover .flip-card-front {
  transform: rotateY(180deg);
}

.flip-container:hover .flip-card-back {
  transform: rotateY(0deg);
}

.flip-container.is-flipped .flip-card-front {
  transform: rotateY(180deg);
}

.flip-container.is-flipped .flip-card-back {
  transform: rotateY(0deg);
}

.flip-container .flip-card-back h2,
.flip-container .flip-card-back img,
.flip-container .flip-card-back h3,
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
