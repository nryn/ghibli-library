import { createStore, GetterTree, MutationTree } from 'vuex'
import { stubbedFilmDataFromAPI } from "./stubs"
import { Film, Getters, Mutations, State, MutationTypes, Store } from './types.d'

const filterOnSearchTerm = (searchTerm: string) => (film: Film) => {
  const concatenatedTitles = `${film.release_date}|${film.title}`
  const match = concatenatedTitles.match(new RegExp(searchTerm, 'i'))
  return Boolean(match)
}

const state = {
  rawFilms: stubbedFilmDataFromAPI,
  shownFilms: stubbedFilmDataFromAPI,
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_FILM_SEARCH_RESULT](state, searchTerm) {
    state.shownFilms = !searchTerm ? state.rawFilms : state.rawFilms.filter(filterOnSearchTerm(searchTerm))
  },
}

const getters: GetterTree<State, State> & Getters = {
  tenFilms: (state: State) => state.shownFilms.slice(0, 10),
  filmById: (state: State) => (id: string) => state.rawFilms.find((film) => id === film.id),
}

export const store: Store = createStore<State>({
  state,
  mutations,
  getters,
})
