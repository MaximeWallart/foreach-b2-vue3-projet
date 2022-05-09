import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Experience from './pages/Experience.vue'
import Projets from './pages/Projets.vue'
import Contacts from './pages/Contacts.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Experience },
  { path: '/projets', component: Projets},
  { path: '/contacts', component: Contacts}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router