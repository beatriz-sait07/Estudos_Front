<template>
  <router-view/>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
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
