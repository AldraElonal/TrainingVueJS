<template>
<div class="storeBasket"><h3>Votre Panier</h3>

  <transition-group name="basket" tag="ul" >
  <li v-for="item in $store.state.basket.content" v-bind:key="item.name">{{ item.name }}  :  {{item.price}} €</li>
  </transition-group>

  <p class="font-weight-bold"> Total : {{ this.totalPrice }} €</p>

  <button class="m-1" v-bind:disabled="this.totalPrice==0" @click="payBasket()"> Payer la commande</button>
  <button class="m-1" v-bind:disabled="this.totalPrice==0" @click="cancelBasket()"> Annuler la commande</button>

</div>
</template>

<script>
export default {
  name: "StoreBasket",
  computed: {
    totalPrice (){
      let price = 0;
      this.$store.state.basket.content.forEach(function(item) {
        price += item.price;
      });
      return price;
    }
  },
  methods :{
    cancelBasket() {
      this.$store.state.basket.content = [];
      alert("Bonjour, Votre acaht a été annulé. \n " +
          "Ainsi votre panier a été vidé.");
    },
    payBasket(){
      this.$store.state.basket.content = [];
      alert("Bonjour, Votre achat a été payé. \n \n Merci pour votre confiance.");
    }
  }
}
</script>

<style scoped>

.storeBasket{
  border-left: 1px solid black;
}

.basket-enter-active, .list-leave-active {
  transition: all 1s;
}

.basket-enter, .basket-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>