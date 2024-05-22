<template>
    <div class="menu-principal">
        <div class="logo">
            <img class="img-menu" src="../assets/hub.png" alt="logo">
        </div>
        <div class="redes-sociais">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>

    </div>

</template>
<script>
    export default {
        name: 'Menu'
    }
</script>

<style lang="scss"> 
.menu-principal{
    position: relative;
    display: flex;
    width: 100%;
    height: 10vh;
    background-color: rgba(98, 150, 209, 0.296);
}

.img-menu{
    padding: 0 50px;
    margin-top: 9px;
    justify-content: center;
    width: 15%;
    height: 80%;
    object-fit: contain;
}
</style>