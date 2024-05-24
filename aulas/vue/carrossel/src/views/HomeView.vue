<template>
  <nav class="menu-p">
    <Menu><p>teste</p></Menu>
  </nav>
  <div class="home">
    <carousel class="carousel" v-slot="{ atualSlide }">
      <slide v-for="(slide, index) in c_slides" :key="index">
        <div v-show="atualSlide === index + 1" class="slide-info">
          <img :src="getImagePath(slide)" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { ref } from 'vue';
import CarouselComponent from '@/components/Carousel.vue'
import SlideComponent from '@/components/Slide.vue'
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

    const obterImg = (slide) => {
      return new URL(`../assets/${slide}.png`, import.meta.url).href;
    };

    return { c_slides, getImagePath: obterImg};
  },
};
</script>

<style lang="css" scoped>

</style>
