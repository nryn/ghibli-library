<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'
import { ActionTypes, MutationTypes } from '../store/types.d'
import RoundedChip from '../components/RoundedChip.vue'
import BackToFilmsButton from '../components/BackToFilmsButton.vue'

const route = useRoute()
const film = computed(() => store.getters.filmById(route.params.id as string))
const characters = computed(() => store.getters.peopleForFilm(route.params.id as string))

watchEffect(() => {
  store.dispatch(ActionTypes.GET_CHARACTERS_FOR_FILM, film?.value?.id || '')
  store.commit(MutationTypes.SET_DYNAMIC_BACKGROUND_URL, film?.value?.image)
})

const extraSkewedImage = ref(false)
</script>

<template>
  <div>
    <BackToFilmsButton />
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full p-8 ml-4 mt-8 md:ml-16 z-20 pointer-events-none">
        <h1 v-if="film" class="text-3xl my-4 md:whitespace-nowrap">{{ film.title }}</h1>
        <p class="text-6xl my-4 md:whitespace-nowrap inline mr-4">{{ film?.original_title }}</p>
        <span v-if="film?.original_title_romanised" class="whitespace-nowrap italic text-sm opacity-40">[ {{ film?.original_title_romanised }} ]</span>
        <p class="text-m my-4">{{ film?.description }}</p>
        <div class="opacity-40">
          <p v-if="film?.director">Director: {{ film?.director }}</p>
          <p v-if="film?.producer">Producer: {{ film?.producer }}</p>
          <p v-if="film?.release_date">Released in {{ film?.release_date }}</p>
          <p v-if="film?.running_time">{{ film?.running_time }} Minutes</p>
        </div>
        <div v-if="characters?.length" class="py-4">
            <p>Characters:</p>
            <div class="flex flex-row flex-wrap mt-4 w-2/3">
                <RoundedChip v-for="(character, index) in characters" :key="index" :text="character.name" />
            </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center mt-24">
        <img class="min-w-min skewed md:max-h-[90vh]" :class="{ 'extra-skewed': extraSkewedImage }" @mouseover="extraSkewedImage = true" @mouseleave="extraSkewedImage = false" :src="film?.image" />
      </div>
    </div>
  </div>
</template>

<style>
.skewed {
  -webkit-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  -webkit-transform: perspective(400px) translateZ(-100px) translateX(-10px) translateY(-100px) rotateY(-15deg);
          transform: perspective(400px) translateZ(-100px) translateX(-10px) translateY(-100px) rotateY(-15deg);
}
.extra-skewed {
  -webkit-transform: perspective(1000px) translateZ(0px) translateX(-50px) translateY(-80px) rotateY(-10deg);
          transform: perspective(1000px) translateZ(0px) translateX(-50px) translateY(-80px) rotateY(-10deg);
}
</style>
