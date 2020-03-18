import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Deck from '../views/Deck.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/deck',
    name: 'Deck',
    component: Deck
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
