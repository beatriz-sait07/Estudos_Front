<template>
    <header>
        <div>
        <Menu></Menu>
        </div>
    </header>
    <body>
        <div class="tabela-center">
            <table>
                <thead class="text-black">
                    <tr>
                    <th>Nome</th>
                    <th>Espécie</th>
                    <th>Habitat</th>
                    </tr>
                </thead>
                <tbody class="text-white text-center">
                    <tr class="itens-table" v-for="funcionario in funcionarios" :key="funcionario.id">
                    <td>{{ funcionario.nome }}</td>
                    <td>{{ funcionario.especie }}</td>
                    <td>{{ funcionario.habitat }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</template>

  
<script>
import MenuComponent from '@/components/Menu.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Funcionarios',
  components: { 
    Menu: MenuComponent
  },
  setup() {
    const funcionarios = ref([]);

    // Faz a chamada à API quando o componente é montado
    onMounted(() => { // Executa a função quando o componente é montado na tela
      axios.get('funcionarios')
        .then((response) => {
          funcionarios.value = response.data; // Armazena os dados na variável reativa
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      funcionarios
    };
  }
};
</script>

<style lang="css">
body {
    @apply bg-gradient-to-t from-[#5050eb] to-[#b8b8eb] h-screen
}

.tabela-center {
    @apply flex justify-center items-center h-screen 
}

table {
    @apply w-1/2 rounded-lg overflow-hidden shadow-2xl font-[Poppins]
}

th {
    @apply py-3 bg-[#5050eb]
}

td {
    @apply sm:px-7 md:px-7 py-2
}

.itens-table {
    @apply hover:bg-gradient-to-t from-[#b8b8eb] to-[#5050eb] cursor-pointer duration-300
}
</style>
