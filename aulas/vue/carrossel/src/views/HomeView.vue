<template>
  <header class="bg-[#b8b8eb]">
    <div>
      <Menu></Menu>
    </div>
  </header>
  <body class="bg-gradient-to-t from-[#5050eb] to-[#b8b8eb] h-screen" > <!-- coloca o fundo gradiente -->
    <div>
      <router-link to="/funcionarios">Funcionários</router-link>
    </div>
    <div >
      <carousel v-slot="{ atualSlide }">
        <slide v-for="(slide, index) in c_slides" :key="index">
          <div v-show="atualSlide === index + 1" class="slide-info">
            <img :src="getImagePath(slide)" alt="">
          </div>
        </slide>
      </carousel>
    </div>
  </body>
</template>

<script>
import { ref } from 'vue';
import CarouselComponent from '@/components/Carousel.vue'
import SlideComponent from '@/components/Slide.vue'
import MenuComponent from '@/components/Menu.vue'


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

<style lang="css">

</style>
