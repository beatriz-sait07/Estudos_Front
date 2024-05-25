<template>
  <div class="home">
    <div class="cs-fundo">
      <div class="carousel"> <!-- se digitar div. a classe que deseaja ela cria a div ja com a classe -->
          <slot :atualSlide="atualSlide"/>
          <div class="navigate">
              <div class="seta esq">
                  <i @click="antSlide" class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="seta dir">
                  <i @click="proxSlide" class="fa-solid fa-chevron-right"></i>
              </div>
          </div>
          <div class="loc-slide"> <!-- localização do slide -->
            <span v-for="(slide, index) in deslizar" :key="index" :class="{active : index + 1 === atualSlide}">
              {{ slide }}
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CarouselComponent',
  setup() {
    const atualSlide = ref(1) // inicializa atualSlide com 1
    const deslizar = ref(null)

    // Para avançar
    const proxSlide = () => {
      if (atualSlide.value === deslizar.value.length) {
        atualSlide.value = 1; // reseta para o primeiro slide se estiver no último
        return
      }
      atualSlide.value += 1 // avança para o próximo slide
    }

    // Para voltar
    const antSlide = () => {
      if (atualSlide.value === 1) {
        atualSlide.value = deslizar.value.length; // vai para o último slide se estiver no primeiro
        return
      }
      atualSlide.value -= 1 // volta para o slide anterior
    }

    onMounted(() => {
      deslizar.value = document.querySelectorAll('.slide') // seleciona todos os elementos com a classe 'slide'
      // console.log(deslizar.value)
    })

    return { atualSlide, proxSlide, antSlide, deslizar}
  },
}
</script>


<style lang="css">
.cs-fundo {
  background-color: black;
  margin-top: 290px; /* Ajuste conforme necessário */
  position: flex;
  display: inline-flexbox;

  .carousel{
    position: relative;

  }
}



</style>