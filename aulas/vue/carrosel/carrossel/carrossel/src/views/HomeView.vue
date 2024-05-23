<template>
  <div class="menu-p">
    <Menu><p>teste</p></Menu>
  </div>
  <div class="home">
    <carousel class="carousel" v-slot="{ atualSlide }">
      <slide v-for="(slide, index) in c_slides" :key="index">
        <div v-show="atualSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.png`)" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { ref } from 'vue';
import CarouselComponent from '@/components/Carousel.vue'
import SlideComponent from '../components/Slide.vue'
import MenuComponent from '@/components/Menu.vue';

export default {
  name: 'HomeView',
  components: {
    carousel: CarouselComponent,
    slide: SlideComponent,
    Menu: MenuComponent
  },
  setup() {
    const c_slides = ref(['ana', 'maria', 'taynan']);

    return { c_slides };
  },
};
</script>

<style lang="css" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Assuming you want the home div to take the full height of the viewport */
}

.carousel {
  position: relative;
  max-width: 100vh;
  height: 100vh;
}

.slide-info {
  position: absolute;
  top: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

img {
  min-height: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
