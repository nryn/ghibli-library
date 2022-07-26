import { createStore } from 'vuex'
import { stubbedFilmDataFromAPI } from "./stubs"
import { Film, State } from './types'

const filterOnSearchTerm = (searchTerm: string) => (film: Film) => {
  const concatenatedTitles = `${film.release_date}|${film.title}`
  const match = concatenatedTitles.match(new RegExp(searchTerm, 'i'))
  return Boolean(match)
}

export const store = createStore<State>({
  state: {
    rawFilms: stubbedFilmDataFromAPI,
    shownFilms: stubbedFilmDataFromAPI,
  },
  mutations: {
    setFilmSearchResult(state, searchTerm) {
      state.shownFilms = !searchTerm ? state.rawFilms : state.rawFilms.filter(filterOnSearchTerm(searchTerm))
    },
  },
  getters: {
    tenFilms: (state) => state.shownFilms.slice(0, 10),
  }
})
