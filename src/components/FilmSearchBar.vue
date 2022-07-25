<script setup lang="ts">
import { ref } from 'vue'

const searchTerm = ref<string>('')
const updateSearchTerm = () => {
  console.log(`I would like to send ${searchTerm.value} to the store`)
  // TODO send searchTerm.value to the store so it can be used to filter the film list...
}
</script>

<template>
  <div>
    <input v-model="searchTerm" autofocus @input="updateSearchTerm" data-test="searchInput"/>
  </div>
</template>