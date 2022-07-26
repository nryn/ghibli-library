import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'

export interface State {
  rawFilms: Film[]
  shownFilms: Film[]
}

export type Getters = {
  tenFilms(state: State): Film[]
  filmById(state: State): (arg1: string) => Film | undefined
}

export enum MutationTypes {
  SET_FILM_SEARCH_RESULT = 'SET_FILM_SEARCH_RESULT'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_FILM_SEARCH_RESULT](state: S, payload: string): void
}

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

// Created manually after hitting the endpoint https://ghibliapi.herokuapp.com/films
type Film = {
  id: string
  title: string
  original_title: string
  original_title_romanised: string
  image: string
  movie_banner: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
  people: string[]
  species: string[]
  locations: string[]
  vehicles: string[]
  url: string
}
