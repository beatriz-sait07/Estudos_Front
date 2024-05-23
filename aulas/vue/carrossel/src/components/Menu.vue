<template>
    <div class="menu-principal">
        <div class="logo">
            <img class="img-menu" src="../assets/hub.png" alt="logo">
        </div>
        <div class="redes-sociais">
            <img class="social" src="../assets/whats-logo.png" alt="logo whatsapp">
            <img class="social" src="../assets/insta-logo.png" alt="logo insta">
            <img class="social" src="../assets/git-logo.png" alt="logo github">
        </div>
    </div>

</template>

<script>

    export default { 
        name:'MenuComponent'
    }
</script>

<style lang="css"> 
.menu-principal{
    position: relative;
    display: flex;
    width: 100%;
    height: 10vh;
    background-color: rgba(98, 150, 209, 0.296);

    .logo{
        width: 60%;

        .img-menu{
            margin-top: 10px;
            padding: 0 20px;
        }
        
    }

    .redes-sociais{
        width: 40%;
    }
}

</style>