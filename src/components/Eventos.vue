<template>
  <div id="carousel" class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <img :src="item.src" :alt="item.alt" @error="handleImageError(index)">
      </div>
    </div>
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="showSlide(index)"
      ></button>
    </div>
    <button class="carousel-control-prev" @click="prevSlide">&#10094;</button>
    <button class="carousel-control-next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        { src: "public/carrussel/recurresol1.jpg", alt: "Image 1" },
        { src: "public/carrussel/recurresol2.jpg", alt: "Image 2" },
        { src: "public/carrussel/recurresol3.jpg", alt: "Image 3" },
        { src: "public/carrussel/recurresol4.jpg", alt: "Image 4" },
        { src: "public/carrussel/recurresol5.webp", alt: "Image 5" },
        { src: "public/carrussel/recurresol6.jpg", alt: "Image 6" },
        { src: "public/carrussel/recurresol7.jpg", alt: "Image 7" }
      ]
    };
  },
  mounted() {
    this.autoSlide = setInterval(this.nextSlide, 3000);
  },
  beforeDestroy() {
    clearInterval(this.autoSlide);
  },
  methods: {
    showSlide(index) {
      const totalSlides = this.items.length;
  
      if (index >= totalSlides) {
        this.currentIndex = 0;
      } else if (index < 0) {
        this.currentIndex = totalSlides - 1;
      } else {
        this.currentIndex = index;
      }
    },
    nextSlide() {
      this.showSlide(this.currentIndex + 1);
    },
    prevSlide() {
      this.showSlide(this.currentIndex - 1);
    },
    handleImageError(index) {
      console.error(`Error loading image at index ${index}:`, this.items[index].src);
      this.items[index].src = 'public/carrussel/placeholder.jpg'; // Reemplaza con una imagen de marcador de posición
    }
  }
};
</script>

<style scoped>gi
.carousel {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 20rem;
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  display: block;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  background-color: #a32c2c;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
}

.carousel-indicators button.active {
  opacity: 1;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #7f0909;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}
</style>
