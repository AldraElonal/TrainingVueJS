<template>
  <b-container class="homeFilter">
    <h2>Affichage</h2>

    <b-col>

      <b-input-group>
        <input type="checkbox" id="News" v-model="$store.state.home.news" v-bind:checked="$store.state.home.news">
        <label for="News" class="ml-1">Actualités</label>
      </b-input-group>

      <b-input-group>
        <input type="checkbox" id="Projects" v-model="$store.state.home.projects"
               v-bind:checked="$store.state.home.projects">
        <label for="Projects" class="ml-1">Projets</label>
      </b-input-group>

      <b-input-group>
        <input type="checkbox" id="Skills" v-model="$store.state.home.skills" v-bind:checked="$store.state.home.skills">
        <label for="Skills" class="ml-1">Compétences</label>
      </b-input-group>

    </b-col>

  </b-container>
</template>

<script>
export default {
  name: "HomeFilter"
}
</script>

<style scoped>
.homeFilter {
  border-right: 1px solid black;
}
</style>