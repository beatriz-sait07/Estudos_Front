<template>
    <nav class="menu-principal">
        <div class="logo">
            <img class="img-menu" src="../assets/hub.png" alt="logo">
        </div>
        <div class="redes-sociais">
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
.menu-principal {
    background-color: rgba(146, 215, 215, 0.827);
    overflow: hidden;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    top: 0;
}

.menu-principal .logo {
    flex: 1;
    display: flex;
    justify-content: flex-start;
}

.menu-principal .logo .img-menu {
    margin-top: 0 40px;
    display: block;
    padding: 0 20px;
    max-width: 100%;
    width: 10vh;
}

.menu-principal .redes-sociais {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.menu-principal .redes-sociais ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
}

.menu-principal .redes-sociais ul li {
    display: inline-block;
    margin: 0 20px;
    
}
li:hover{
    transform: scale(1.5);
    transition: 0.5s;
    background-color: rgba(51, 111, 207, 0.493);
    border-radius: 100%;
}

.menu-principal .redes-sociais .social {
    margin-top: 20px;
    display: block;
    padding: 0 20px;
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
