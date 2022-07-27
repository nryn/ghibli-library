import { ActionTree, createStore, GetterTree, MutationTree } from 'vuex'
import { api } from '../api'
import { Film, Getters, Mutations, State, MutationTypes, Store, ActionTypes, Actions } from './types.d'

const filterOnSearchTerm = (searchTerm: string) => (film: Film) => {
  const concatenatedTitles = `${film.release_date}|${film.title}`
  const match = concatenatedTitles.match(new RegExp(searchTerm, 'i'))
  return Boolean(match)
}

const state: State = {
  rawFilms: [], // previously imported stubbedFilmDataFromAPI
  shownFilms: [], // previously imported stubbedFilmDataFromAPI
  people: {},
  startingFilmIndex: 0,
  endingFilmIndex: 10,
  filmSearchTerm: '',
  dynamicBackgroundUrl: '/default-background.jpeg',
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_FILM_SEARCH_RESULT](state, searchTerm) {
    state.filmSearchTerm = searchTerm
    state.shownFilms = !searchTerm ? state.rawFilms : state.rawFilms.filter(filterOnSearchTerm(searchTerm))
    state.startingFilmIndex = 0
    state.endingFilmIndex = 10
  },
  [MutationTypes.SET_RAW_FILMS](state, rawFilms) {
    state.rawFilms = rawFilms
    state.shownFilms = rawFilms
  },
  [MutationTypes.SET_PEOPLE_FOR_FILM](state, { people, filmId }) {
    state.people[filmId] = people
  },
  [MutationTypes.SHOW_MORE_FILMS](state) {
    if (state.endingFilmIndex >= state.shownFilms.length - 1) {
      state.startingFilmIndex = 0
      state.endingFilmIndex = 10
    } else {
      state.startingFilmIndex += 10
      state.endingFilmIndex += 10
    }
  },
  [MutationTypes.SET_DYNAMIC_BACKGROUND_URL](state, imageUrl) {
    state.dynamicBackgroundUrl = imageUrl || state.dynamicBackgroundUrl
  },
}

const getters: GetterTree<State, State> & Getters = {
  tenFilms: (state: State) => state.shownFilms.slice(state.startingFilmIndex, state.endingFilmIndex),
  filmById: (state: State) => (filmId: string) => state.rawFilms.find((film) => filmId === film.id),
  peopleForFilm: (state: State) => (filmId: string) => state.people[filmId],
  canShowMoreFilms: (state) => state.endingFilmIndex < state.shownFilms.length - 1,
  filmSearchTerm: (state) => state.filmSearchTerm,
  dynamicBackgroundUrl: (state) => state.dynamicBackgroundUrl,
}


export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_CHARACTERS_FOR_FILM]({ state, commit }, filmId) {
    if (!filmId) return // when there's no people in this film
    if (state.people[filmId]) return // when we already have people for this film

    const v4 = new RegExp(/[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/i)
    const characterIds = state.rawFilms.find(film => film.id === filmId)?.people.map((personId) => personId.match(v4)?.[0]).filter(Boolean) // Filter needed to clean results because the API data varies
    if (!characterIds) return

    const getLotsOfPeopleData = characterIds?.map(async (characterId) => {
      const people = await api.get(`people/${characterId}`)
      return people.data
    })

    const people = await Promise.all(getLotsOfPeopleData)

    commit(MutationTypes.SET_PEOPLE_FOR_FILM, { people, filmId })
  },
}

export const store: Store = createStore<State>({
  state,
  mutations,
  getters,
  actions,
})
