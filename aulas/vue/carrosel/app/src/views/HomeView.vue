<template>
  <div class="home">
    <carousel class="carousel" v-slot="{ atualSlide }">
      <slide v-for="(slide, index) in c_slides" :key='index'>
        <div v-show="atualSlide === index + 1" class="slide-info">
          <!-- <img src="../assets/ana.png" alt="ana"> -> deveria ser assim, mas passaremos de forma intermpolada e dinamica--> 
          <img :src="require(`../assets/${slide}.png`)" alt="">


        </div>
      </slide>
      
    </carousel>
  </div>
</template>

<script>
import carousel from '../components/Carousel.vue'
import slide from '../components/Slide.vue'


export default {
  name: 'HomeView',
  components: {
    carousel, slide},
    setup() {
      const c_slides = ['ana', 'maria', 'taynan' ]

      return c_slides
    },
}
</script>


<style lang="scss" scoped>
.carousel{
  position: relative;
  max-width: 100 vh;
  height: 100 vh;
}

.slide-info{
  position: absolute;
  top: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

img{
  min-height: 100%;
  height: 100%;
  object-fit: cover;
}
</style>