<template>
    <div class="carousel"> <!-- se digitar div. a classe que deseaja ela cria a div ja com a classe -->
        <slot :atualSlide="atualSlide"/>

        <div class="navigate">
            <div class="seta esq">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="seta dir">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

    export default {
        setup(){
            const atualSlide = ref(1) 

            return {atualSlide}
        }, 
    }
</script>

<style lang="scss">
.navagate{
    position: absolute;
    padding: 0 16px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .seta{
        display: flex;
        flex: 1; 
    }

    .dir{
        justify-content: flex-end;
    }

    i {
        cursor: pointer;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: rgb(225, 220, 195);
        color: rgb(4, 24, 111);
    }
}


</style>