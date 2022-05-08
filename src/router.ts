import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from '~pages'
import Index from './pages/Index.vue'
import Projets from './pages/Projets.vue'
import Contacts from './pages/Contacts.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Index },
  { path: '/projets', component: Projets},
  { path: '/contacts', component: Contacts}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router