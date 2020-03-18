<template>
<div class="wrapper">
  <div class="pokemons">
    <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="image">
        <img :src="'../../images/pokemon/'+pokemon.image">
      </div>
      <div class="info">
        <h1>{{pokemon.name}}</h1>
        <p>Primary Type: <b>{{pokemon.type1}}</b> , Secondary Type: <b>{{pokemon.type2}}</b></p>
      </div>
      <div class="CP">
        <h2>Max CP: {{pokemon.total}}</h2>
        <button @click="add(pokemon)" class="auto">Add to Deck</button>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PokemonList',
  props: {
    pokemons: Array
  },
  methods: {
      add(pokemon){
          this.$root.$data.deck.push(pokemon);
      },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokemon {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.pokemon img {
  border: 2px solid #333;
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.pokemon .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #3c59a4;
  color: #000;
  padding: 2px 10px;
  height: 80px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}


.CP {
  display: flex;
  border: 2px solid #333;
  height: 50px;
}

button {
  height: auto;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
