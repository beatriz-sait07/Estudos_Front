<template>
  <div class="carrossel relative">
    <div > <!-- se digitar div. a classe que deseaja ela cria a div ja com a classe -->
        <slot :atualSlide="atualSlide"/>
        <div class="relative flex items-center justify-between">
            <div class="seta-esq absolute top-1/2 transform -translate-y-[35vh] left-0">
                <i @click="antSlide" class="fa-solid fa-chevron-left cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-[#5050eb7b] rounded-full"></i>
              </div>
              <div class="seta-dir absolute top-1/2 transform -translate-y-[35vh]  right-0">
                <i @click="proxSlide" class="fa-solid fa-chevron-right cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-[#5050eb7b] rounded-full"></i>
            </div>
        </div>
        <div> <!-- localização do slide -->
          <span v-for="(slide, index) in deslizar" :key="index" :class="{active : index + 1 === atualSlide}">
            {{ slide }}
          </span>
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
.carrossel{
  @apply flex justify-center items-center h-screen mx-auto
  /* responsivo,centraliza o conteiner, centraliza geral, define altura do conteiner, centraliza  */
}
</style>