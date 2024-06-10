<template>
    <div
      class="flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-emerald-950 px-5 py-8 xl:px-10 xl:py-28 "
  >
      <!-- Image Containers -->
  
      <div class="flex gap-60">
        <!-- First Card -->
        <figure
          ref="flipContainer1"
          @mousemove="handleMouseMove($event, 'flipContainer1')"
          @mouseleave="resetRotation('flipContainer1')"
          @keydown="handleKeyDown($event, 'flipContainer1')"
          tabindex="0"
          class="flip-container relative h-96 w-96 cursor-pointer rounded-3xl "
        >
          <!-- Front Side Of Card -->
          <div
            class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl  bg-red-800 bg-center transition-all duration-1000 ease-in-out"
          >
            <h2 class="mb-2 text-2xl font-bold text-white">Menú Sondika</h2>
            <img
              src="../assets/mesa.png"
              alt="mesa"
              class="size-24 object-cover"
            />
          </div>
  
          <!-- Back Side Of Card -->
          <figcaption
            class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
          >
          
            <div class="grid grid-cols-1 grid-rows-3 gap-2 text-nowrap text-sm font-semibold underline">
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
                Entrantes
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
                Plato-principal
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 text-lg"
              >
                Postre
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
                Bibida
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
                Precio
              </div>
            </div>
          </figcaption>
        </figure>
  
        <!-- Second Card -->
        <figure
          ref="flipContainer2"
          @mousemove="handleMouseMove($event, 'flipContainer2')"
          @mouseleave="resetRotation('flipContainer2')"
          @keydown="handleKeyDown($event, 'flipContainer2')"
          tabindex="0"
          class="flip-container relative h-96 w-96 cursor-pointer rounded-3xl"
        >
          <!-- Front Side Of Card -->
          <div
            class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl  bg-red-800 bg-center transition-all duration-1000 ease-in-out"
          >
            <h2 class="mb-2 text-2xl font-bold text-white">Menú  Txorierri</h2>
            <img
              src="../assets/mesa.png"
              alt="mesa"
              class="size-24 object-cover"
            />
          </div>
  
          <!-- Back Side Of Card -->
          <figcaption
            class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
          >
           
            <div class="grid grid-cols-1 grid-rows-3 gap-2 text-nowrap text-sm">
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
                Entrantes
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 underline text-lg"
              >
              Plato-principal
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline text-lg"
              >
              Postre
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 underline text-lg "
              >
              Bibida
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 underline  text-lg"
              >
                Precio
              </div>
            </div>
          </figcaption>
        </figure>
  
        <!-- Third Card -->
        <figure
          ref="flipContainer3"
          @mousemove="handleMouseMove($event, 'flipContainer3')"
          @mouseleave="resetRotation('flipContainer3')"
          @keydown="handleKeyDown($event, 'flipContainer3')"
          tabindex="0"
          class="flip-container relative h-96 w-96 cursor-pointer rounded-3xl "
        >
          <!-- Front Side Of Card -->
          <div
            class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl  bg-red-800 bg-center transition-all duration-1000 ease-in-out"
          >
            <h2 class="mb-2 text-2xl font-bold text-white">Menú  Izarza</h2>
            <img
              src="../assets/mesa.png"
              alt="mesa"
              class="size-24 object-cover"
            />
          </div>
  
          <!-- Back Side Of Card -->
          <figcaption
            class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
          >
          
            <div class="grid grid-cols-1 grid-rows-3 gap-2 text-nowrap text-sm">
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline  text-lg"
              >
                Entrantes
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900font-semibold underline  text-lg"
              >
              Plato-principal
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900font-semibold underline  text-lg"
              >
              Postre
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline  text-lg"
              >
                Bibida
              </div>
              <div
                class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900  underline  text-lg"
              >
                Precio
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  
  const flipContainer1 = ref(null);
  const flipContainer2 = ref(null);
  const flipContainer3 = ref(null);
  const isFlipped = ref([false, false, false]);
  
  // Rotating The Card Based On The Mouse Movement
  const handleMouseMove = (event, container) => {
    const rect = refs[container].value.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const rotateX = (mouseY / rect.height - 0.5) * 50;
    const rotateY = -(mouseX / rect.width - 0.5) * 50;
    refs[container].value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  // Resetting The Rotation Back To Original State
  const resetRotation = (container) => {
    refs[container].value.style.transform = "";
  };
  
  // Checking The Value Of isFlipped & Changing its Value
  const handleFlip = (index, container) => {
    if (isFlipped.value[index]) {
      refs[container].value.classList.remove("is-flipped");
      isFlipped.value[index] = false;
    } else {
      refs[container].value.classList.add("is-flipped");
      isFlipped.value[index] = true;
    }
  };
  
  // Triggering handleFlip Function on pressing 'Enter' Key
  const handleKeyDown = (event, container, index) => {
    if (event.key === "Enter") {
      handleFlip(index, container);
    }
  };
  </script>
  <style scoped>
  /* Adding Perspective To Parent Container /
  .flip-container {
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }
  
  / Hiding The Back Of Card /
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
  }
  
  / Setting The Default Postion Of The Back Of The Card /
  .flip-card-back {
    transform: rotateY(180deg);
  }
  
  / Flipping The Card On Hover /
  .flip-container:hover .flip-card-front {
    transform: rotateY(180deg);
  }
  
  .flip-container:hover .flip-card-back {
    transform: rotateY(360deg);
  }
  
  / Flipping The Card On 'Enter' Key Event /
  .flip-container.is-flipped .flip-card-front {
    transform: rotateY(180deg);
  }
  
  .flip-container.is-flipped .flip-card-back {
    transform: rotateY(360deg);
  }
  
  / Adding Depth To Elements On The Back */
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