<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { store } from '../store'
import { MutationTypes } from '../store/types.d'

const searchTerm = ref<string>('')
const updateSearchTerm = () => { store.commit(MutationTypes.SET_FILM_SEARCH_RESULT, searchTerm.value) }
const searchTermElement = ref<HTMLElement | null>(null)
const bringFocusBack = () => { searchTermElement?.value?.focus() }

onMounted(() => {
  bringFocusBack()
  searchTerm.value = store.getters.filmSearchTerm
})
</script>

<template>
  <div>
    <input ref="searchTermElement" v-model="searchTerm" autofocus @input="updateSearchTerm" @blur="bringFocusBack" data-test="searchInput"/>
  </div>
</template>