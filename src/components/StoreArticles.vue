<template>
  <div>

    <transition name="articles">
      <b-row v-show="$store.state.store.category==1" cols="4" class="justify-content-md-center">

        <b-card class="m-2" v-for="item in item1" v-bind:key="item.id">

          <template #header>
            {{ item.name }}
          </template>

          <b-card-img v-bind:src="item.img"></b-card-img>
          <b-card-text>
            <p>{{ item.desc }} </p>
            <p class="font-weight-bold"> Prix : {{ item.price }} €</p>
            <button @click="addItemToBasket(item)"> Ajouter Au Panier</button>
          </b-card-text>

        </b-card>

      </b-row>
    </transition>

    <transition name="articles">
      <b-row v-show="$store.state.store.category==2" cols="4" class="justify-content-md-center">

        <b-card class="m-2" v-for="item in item2" v-bind:key="item.id">

          <template #header>
            {{ item.name }}
          </template>

          <b-card-img v-bind:src="item.img"></b-card-img>
          <b-card-text>
            <p>{{ item.desc }} </p>
            <p class="font-weight-bold"> Prix : {{ item.price }} €</p>
            <button @click="addItemToBasket(item)"> Ajouter Au Panier</button>

          </b-card-text>
        </b-card>

      </b-row>
    </transition>

    <transition name="articles">
      <b-row v-show="$store.state.store.category==3" cols="4" class="justify-content-md-center">

        <b-card class="m-2" v-for="item in item3" v-bind:key="item.id">

          <template #header>
            {{ item.name }}
          </template>

          <b-card-img v-bind:src="item.img"></b-card-img>
          <b-card-text>
            <p>{{ item.desc }} </p>
            <p class="font-weight-bold"> Prix : {{ item.price }} €</p>
            <button @click="addItemToBasket(item)"> Ajouter Au Panier</button>

          </b-card-text>
        </b-card>

      </b-row>
    </transition>

  </div>
</template>

<script>
export default {
  name: "StoreArticles",
  data() {
    return {
      item1: [
        {
          id: 0,
          name: 'Dektor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))
        },
        {
          id: 1,
          name: 'LabsWive',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))
        },
        {
          id: 2,
          name: 'Techim',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        }, {
          id: 3,
          name: 'Nerder',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        },
        {
          id: 4,
          name: 'Machifan',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        },
        {
          id: 5,
          name: 'Brainix',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        }, {
          id: 6,
          name: 'Workstar',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        },
        {
          id: 7,
          name: 'Computara',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        },
        {
          id: 8,
          name: 'Soleil T',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(100))

        }
      ],
      item2: [
        {
          id: 0,
          name: 'Headish',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))

        },
        {
          id: 1,
          name: 'CraniumLab',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))

        },
        {
          id: 2,
          name: 'Postery',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))

        }, {
          id: 3,
          name: 'Backet',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 4,
          name: 'Bangel',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 5,
          name: 'Scarform',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        }, {
          id: 6,
          name: 'Conder',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 7,
          name: 'Offician',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 8,
          name: 'Kicket',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        }
      ],
      item3: [
        {
          id: 0,
          name: 'Upoint',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(20))
        },
        {
          id: 1,
          name: 'Relagain',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 2,
          name: 'Spoint',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        }, {
          id: 3,
          name: 'Behint',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 4,
          name: 'Handor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 5,
          name: 'Cominder',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        }, {
          id: 6,
          name: 'Fortouch',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 7,
          name: 'NeoForward',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        },
        {
          id: 8,
          name: 'Supporth',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisl ante, tempus scelerisque dolor volutpat in. ',
          img: 'https://picsum.photos/100/100',
          price: Math.floor(Math.random() * Math.floor(50))
        }
      ]
    }
  },
  methods: {
    addItemToBasket(item) {
      this.$store.state.basket.content.push(item);


    }

  }
}
</script>

<style scoped>

.articles-enter {
  opacity: 0;
  transform: translateX(-45px);
}

.articles-leave-to {
  opacity: 0;
  transform: translateX(45px);
}

.articles-enter-active {
  transition: all 1s;
  transition-delay: 1s;
}

.articles-leave-active {
  transition: all 1s;
}


</style>