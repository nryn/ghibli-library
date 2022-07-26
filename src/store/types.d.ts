import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  ActionTree,
  ActionContext
} from 'vuex'

export interface State {
  rawFilms: Film[]
  shownFilms: Film[]
  people: { [key: string]: Person[] }
  startingFilmIndex: number
  endingFilmIndex: number
}

export type Getters = {
  tenFilms(state: State): Film[]
  filmById(state: State): (filmId: string) => Film | undefined
  peopleForFilm(state: State): (filmId: string) => People[]
  canShowMoreFilms(state: State): boolean
}

export enum MutationTypes {
  SET_FILM_SEARCH_RESULT = 'SET_FILM_SEARCH_RESULT',
  SET_RAW_FILMS = 'SET_RAW_FILMS',
  SET_PEOPLE_FOR_FILM = 'SET_PEOPLE_FOR_FILM',
  SHOW_MORE_FILMS = 'SHOW_MORE_FILMS'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_FILM_SEARCH_RESULT](state: S, payload: string): void
  [MutationTypes.SET_RAW_FILMS](state: S, payload: Film[]): void
  [MutationTypes.SET_PEOPLE_FOR_FILM](state: S, payload: { people: Person[], filmId: string }): void
  [MutationTypes.SHOW_MORE_FILMS](state: S): void
}

export enum ActionTypes {
  GET_CHARACTERS_FOR_FILM = 'GET_CHARACTERS_FOR_FILM',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_CHARACTERS_FOR_FILM](
    { commit }: AugmentedActionContext,
    filmId: string
  ): Promise<void>
}

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
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

// Created manually after hitting the endpoint https://ghibliapi.herokuapp.com/people
type Person = {
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
