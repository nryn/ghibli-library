<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'
import { MutationTypes } from '../store/types.d'

const searchTerm = ref<string>('')
const updateSearchTerm = () => { store.commit(MutationTypes.SET_FILM_SEARCH_RESULT, searchTerm.value) }
</script>

<template>
  <div>
    <input v-model="searchTerm" autofocus @input="updateSearchTerm" data-test="searchInput"/>
  </div>
</template>