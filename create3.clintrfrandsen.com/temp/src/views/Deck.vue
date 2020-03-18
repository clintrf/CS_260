
<template>
<div>
    <h1 class="empty"> Current Pokemon Deck</h1>
    <p v-if="this.$root.$data.battle_deck.length === 1 || this.$root.$data.battle_deck.length === 2" >{{this.$root.$data.battle_deck[0].name}}  is the first Pokemon </p>
    <p v-if="this.$root.$data.battle_deck.length === 2">{{this.$root.$data.battle_deck[1].name}}  is the second Pokemon </p>

    <div v-if="this.$root.$data.winner.length > 0">
      <div>
        <img :src="'../../images/pokemon/'+ this.$root.$data.winner[0].image" style="height:250px;width:300px;">
      </div>
     <p >{{this.$root.$data.winner[0].name}} is the Winner </p>
    </div>

    <div v-if="this.$root.$data.battle_deck.length === 2">
      <button @click="final_battle()" class="auto"> Battle</button>
    </div>

    <div class="empty" v-if="this.$root.$data.deck.length === 0">
      Your deck is Empty!
    </div>
    <div v-else>
      <DeckList :items="items" />
    </div>
</div>
</template>


<script>
import DeckList from "../components/DeckList.vue"
export default {
  name: 'Deck',
  components: {
    DeckList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    items() {
      return this.$root.$data.deck;
    }
  },
  methods: {
    final_battle(){
      if(this.$root.$data.battle_deck[1].total >= this.$root.$data.battle_deck[0].total){
        this.$root.$data.winner.push(this.$root.$data.battle_deck[1]);
      }
      else {
        this.$root.$data.winner.push(this.$root.$data.battle_deck[0]);
      }

      this.$root.$data.battle_deck.length = 0;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.empty{
    text-align:center;
}
</style>
