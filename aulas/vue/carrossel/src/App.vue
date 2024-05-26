<template >
  <router-view/>
</template>

<style lang="css">

</style>

<script setup>
import axios from "axios"

axios.get('funcionarios')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
</script>
