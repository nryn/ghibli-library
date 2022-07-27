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

const showInputLabel = ref(false)
</script>

<template>
  <div class="w-full flex justify-center items-center flex-col" >
    <input
      v-model="searchTerm"
      id="searchTermElement"
      ref="searchTermElement"
      class="mt-12 p-4 bg-white bg-opacity-10 text-2xl h-12 text-center rounded-full outline-0"
      autofocus 
      data-test="searchInput"
      @mouseover="showInputLabel = true"
      @mouseout="showInputLabel = false" 
      @input="updateSearchTerm"
      @blur="bringFocusBack" 
    />
    <label
      for="searchTermElement"
      class="mt-3 transition-opacity duration-500"
      :class="{ 'opacity-0' : !showInputLabel, 'opacity-70': showInputLabel }"
    >
      Search for a Film Title (English) or a Release Year
    </label>
  </div>
</template>