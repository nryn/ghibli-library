import { createStore } from 'vuex'
import { stubbedFilmDataFromAPI } from "./stubs"
import { State } from './types'

export const store = createStore<State>({
  state: {
    films: stubbedFilmDataFromAPI
  }
})
