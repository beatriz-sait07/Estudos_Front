<template>
  <div class="home">
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

          <div class="loc-slide">
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


<style lang="css" scoped>
html, body {
  margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Cor de fundo da página */
}
.home {
  
  display: flex;
  justify-content: center;
  align-items: center;
  max-lines: 100%;
  height: 80vh; /* Define a altura específica desejada */
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #190a8b;

  .navigate{
    padding: 0 16px;
    height: 100%;
    width: 120%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .seta{
      display:flex;
      flex: 1;
    }

    .dir{
      justify-content: flex-end;
    }

    i{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: #190a8b;

    }
  }

  img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajuste para evitar cortes */
}
}

.Carousel {
  /*position: relative;*/
  width: 100%; /* Ajuste a largura conforme necessário */
  max-width: 1000px; /* Define um max-width para limitar a largura máxima */
  height: 100vh; /* Define a altura baseada na viewport */
  max-height: 80vh; /* Garante que a altura máxima seja 80% */
  margin: 0; /* Centraliza o carousel horizontalmente */
}

.slide-info {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}



</style>