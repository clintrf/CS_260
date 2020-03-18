<template>
<div id="app">
  <div id="menu">

    <div id="side-left">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="../public/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
    </div>

    <div id="brand">
      <router-link to="/">
        <img src="../public/images/PokemonLogo.jpg">
      </router-link>
    </div>

    <div id="side-right">
      <router-link to="/deck">
        <div class="menu-item">
          <img src="../public/images/love.png">
          <p>{{this.$root.$data.deck.length}} Deck</p>
        </div>
      </router-link>
    </div>

  </div>
  <router-view />
</div>
</template>

<script>
export default {
  data() {
    return {
      numberOfItems: this.$root.$items.length,
    }
  },
  computed: {
    totalItems() {
      return this.$root.$items.length;
    }
  },
  methods: {
    select(type1) {
      this.type1 = type1;
    },

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "side-left brand side-right";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side-left {
  grid-area: side-left;
  display: flex;
  justify-content: right;
  margin-left: auto;
margin-right: auto;
}

#side-left img {
  width: 50px;
}

#side-right {
  grid-area: side-right;
  display: flex;
  justify-content: right;
  margin-left: auto;
margin-right: auto;
}

#side-right img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

</style>
