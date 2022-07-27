import FilmsList from '../pages/FilmsList.vue'
import FilmDetail from '../pages/FilmDetail.vue'

export const routes = [
  {
    path: '/',
    component: FilmsList,
    meta: {
      enterFrom: "enter-from-top",
      leaveTo: "leave-to-top",
      enterActive: "enter-active-from-top",
      leaveActive: "leave-active-to-top",
    }
  },
  {
    path: '/:id',
    component: FilmDetail,
    meta: {
      enterFrom: "enter-from-bottom",
      leaveTo: "leave-to-bottom",
      enterActive: "enter-active-from-bottom",
      leaveActive: "leave-active-to-bottom",
    }
  },
]
