<template>
<div class="wrapper">
  <div class="pokemons">
    <div class="pokemon" v-for="pokemon in items" :key="pokemon.id">
     <div class="image">
        <img :src="'../../images/pokemon/'+pokemon.image">
      </div>
      <div class="auto">
        <button @click="remove(pokemon)" class="auto">Remove</button>
        <button @click="add_battle(pokemon)" class="auto">Battle</button>
      </div>
      <div class="info">
        <h1>{{pokemon.name}}</h1>
        <h1>Type: {{pokemon.type1}} , {{pokemon.type2}}</h1>
        <h1>Hit Points: {{pokemon.hp}}</h1>
        <h1>Attack: {{pokemon.attack}}</h1>
        <h1>Defense: {{pokemon.defense}}</h1>
        <h1>Sp.Attack: {{pokemon.spatk}}</h1>
        <h1>Sp.Defense: {{pokemon.spdef}}</h1>
        <h1>Speed: {{pokemon.sp}}</h1>

      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DeckList',
  props: {
    items: Array
  },
  methods: {
      remove(pokemon){
        var index = this.items.indexOf(pokemon);
        if (index >= 0) {
            this.$root.$data.deck.splice(index, 1);
        }
      },
      add_battle(pokemon){
        if (this.$root.$data.battle_deck.length >= 2) {
            this.$root.$data.battle_deck.length = 0;
            this.$root.$data.winner.length = 0;
        }
        else{
          this.$root.$data.winner.length = 0;
          this.$root.$data.battle_deck.push(pokemon);
        }
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
  padding: 10px 30px;
  height: 300px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.CP {
  display: flex;
}

button {
  height: 50px;
  width: 150px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
