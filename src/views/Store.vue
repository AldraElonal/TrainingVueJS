<template>
<b-container fluid>
  <h2>Boutique</h2>
  <b-row>
    <b-col lg="2">  <StoreFilter/>
    </b-col>
    <b-col lg="8"><StoreArticles/></b-col>
    <b-col lg="2"><StoreBasket/></b-col>
  </b-row>
</b-container>
</template>

<script>
import StoreArticles from "@/components/StoreArticles";
import StoreBasket from "@/components/StoreBasket";
import StoreFilter from "@/components/StoreFilter";

export default {
name: "Store",
  components : {
  StoreArticles,
    StoreBasket,
    StoreFilter
  }
}
</script>

<style scoped>

</style>