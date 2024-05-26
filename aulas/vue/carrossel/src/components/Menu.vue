<template>
    <nav>
        <div class="logo">
            <img class="img-menu" src="../assets/hub.png" alt="logo">
        </div>
        <div class="p-10 hover:bg-purple rounded">
            <ul>
                <li ><a target="_blank" href="https://www.whatsapp.com"><img class="social" src="../assets/whats-logo.png" alt="logo whatsapp"></a></li>
                <li ><a target="_blank" href="https://www.instagram.com"><img class="social" src="../assets/insta-logo.png" alt="logo instagram"></a></li>
                <li ><a target="_blank" href="https://github.com"><img class="social" src="../assets/git-logo.png" alt="logo github"></a></li>
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
