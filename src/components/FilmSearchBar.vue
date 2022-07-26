<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'

const searchTerm = ref<string>('')
const updateSearchTerm = () => { store.commit('setFilmSearchResult', searchTerm.value) }
</script>

<template>
  <div>
    <input v-model="searchTerm" autofocus @input="updateSearchTerm" data-test="searchInput"/>
  </div>
</template>