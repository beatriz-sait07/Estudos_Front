<template>
    <div class="slide-c">
        <Transition name="slide">
            <slot/>
        </Transition>
    </div>
</template>

<script>
    export default {
        name: 'SlideComponent'
    }
</script>

<style lang="css">
</style>
