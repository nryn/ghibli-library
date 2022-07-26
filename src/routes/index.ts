import FilmsList from '../pages/FilmsList.vue'
import FilmDetail from '../pages/FilmDetail.vue'

export const routes = [
  {
    path: '/',
    component: FilmsList,
  },
  {
    path: '/:id',
    component: FilmDetail,
  },
]
