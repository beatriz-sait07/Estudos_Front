<template>
    <nav class="menu-top"> <!-- responsivo, distancia entre os itens, joga uma % de ocupação -->
        <div>
            <img class="px-5" src="../assets/hub.png" alt="logo">
        </div>
        <div class="">
            <ul class="logo-sociais-tot">
                <li class="list" ><a target="_blank" href="https://www.whatsapp.com"><img class="h-[12vh]" src="../assets/whats-logo.png" alt="logo whatsapp"></a></li>
                <li class="list" ><a target="_blank" href="https://www.instagram.com"><img class="h-[12vh]" src="../assets/insta-logo.png" alt="logo instagram"></a></li>
                <li class="list" ><a target="_blank" href="https://github.com"><img class="h-[12vh]" src="../assets/git-logo.png" alt="logo github"></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default { 
        name:'MenuComponent'
    }
</script>

<style lang="css"> 
.menu-top{
    @apply w-[92%] flex justify-between items-center;

}

.logo-sociais-tot{
    @apply flex items-center gap-[1vw]

}
.list{
    @apply hover:bg-[#5050eb] rounded-full transition-all duration-300
}


/*
overflow -> hidden tudo que ultrpassar ele, sera ocultado/escondido 
background-color -> cor de fundo
position -> define a posição do elemento
margin-top -> distancia do topo
display -> define como o elemento é exibido (block ajuda a centralizar)
padding -> preenchimento interno (cima/baixo - lado/outro)
list-style -> remove a bolinha da lista
hover-> efeito ao passar o mouse
justify-content -> alinha os itens no container
flex-start -> alinha os itens no inicio do container
*/
</style>
