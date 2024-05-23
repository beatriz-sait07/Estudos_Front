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
import apiClient from './plugins/axios'

apiClient.get('funcionario')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
</script>
