import Vue from 'vue'
import App from './App.vue'
import router from './router'

import pokemons from './pokemons.js'

Vue.config.productionTip = false

let data = {
  pokemons: pokemons,
  deck: [],
  battle_deck: [],
  winner: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
