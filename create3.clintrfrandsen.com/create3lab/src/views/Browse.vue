

<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Fire')" href="#" class="pure-menu-link">Fire</a></li>
      <li class="pure-menu-item"><a @click="select('Grass')" href="#" class="pure-menu-link">Grass</a></li>
      <li class="pure-menu-item"><a @click="select('Water')" href="#" class="pure-menu-link">Water</a></li>
      <li class="pure-menu-item"><a @click="select('Bug')" href="#" class="pure-menu-link">Bug</a></li>
      <li class="pure-menu-item"><a @click="select('Poison')" href="#" class="pure-menu-link">Poison</a></li>
      <li class="pure-menu-item"><a @click="select('Normal')" href="#" class="pure-menu-link">Normal</a></li>
      <li class="pure-menu-item"><a @click="select('Electric')" href="#" class="pure-menu-link">Electric</a></li>
    </ul>
  </div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Ground')" href="#" class="pure-menu-link">Ground</a></li>
      <li class="pure-menu-item"><a @click="select('Fairy')" href="#" class="pure-menu-link">Fairy</a></li>
      <li class="pure-menu-item"><a @click="select('Psychic')" href="#" class="pure-menu-link">Psychic</a></li>
      <li class="pure-menu-item"><a @click="select('Fighting')" href="#" class="pure-menu-link">Fighting</a></li>
      <li class="pure-menu-item"><a @click="select('Rock')" href="#" class="pure-menu-link">Rock</a></li>
      <li class="pure-menu-item"><a @click="select('Ghost')" href="#" class="pure-menu-link">Ghost</a></li>
      <li class="pure-menu-item"><a @click="select('Ice')" href="#" class="pure-menu-link">Ice</a></li>
      <li class="pure-menu-item"><a @click="select('Dragon')" href="#" class="pure-menu-link">Dragon</a></li>
    </ul>
  </div>
  <PokemonList :pokemons="pokemons" />
</div>
</template>



<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'Browse',
  components: {
    PokemonList
  },
  data() {
    return {
      type1: '',
    }
  },
  computed: {
    pokemons() {
      return this.$root.$data.pokemons.filter(pokemon => pokemon.type1 === this.type1);
    }
  },
  methods: {
    select(type1) {
      this.type1 = type1;
    },

  }
}
</script>
