<template>
    <div class="slide">
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
