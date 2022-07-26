import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import './style.css'
import App from './App.vue'
import { api } from './api'
import { store } from './store'
import { Film, MutationTypes } from './store/types.d'
import { to } from './utils'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

const [error, filmsFromApi] = await to<{ data: Film[] }>(api.get('films'))
if (!error && filmsFromApi != null) store.commit(MutationTypes.SET_RAW_FILMS, filmsFromApi.data)

app.mount('#app')
