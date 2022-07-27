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
  <div class="w-full flex justify-center items-center flex-col" >
    <input
      v-model="searchTerm"
      ref="searchTermElement"
      class="mt-12 p-4 bg-white bg-opacity-10 text-2xl h-12 text-center rounded-full outline-0"
      autofocus 
      data-test="searchInput"
      @input="updateSearchTerm"
      @blur="bringFocusBack" 
    />
  </div>
</template>