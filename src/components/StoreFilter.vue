<template>

  <b-container class="StoreFiler"><h3>Catégorie </h3>
    <b-col>
      <b-row>
        <input type="radio" id="item1" name="category" value="1" v-model="$store.state.store.category">
        <label for="item1" class="ml-1"> Computer</label></b-row>
      <b-row><input type="radio" id="item2" name="category" value="2" v-model="$store.state.store.category">
        <label for="item2" class="ml-1"> HeadPhone </label></b-row>
      <b-row>
      <input type="radio" id="item3" name="category" value="3" v-model="$store.state.store.category">
      <label for="item3" class="ml-1"> Mug</label></b-row>

    </b-col>

  </b-container>
</template>

<script>
export default {
  name: "StoreFilter"
}
</script>

<style scoped>


.StoreFiler{
  border-right: 1px solid black;
}
</style>