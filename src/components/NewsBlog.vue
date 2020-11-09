<template>
  <div><h2>Nos Dernières Actualités</h2>

    <div v-for="article in articles" v-bind:key="article.id">
      <b-card class="m-2">
        <template #header>
          {{ article.title }}
        </template>
        <b-card-text>
          <p><img class="cardImg" src="https://picsum.photos/150/150" alt="News Image"/> {{ article.body }}</p>

        </b-card-text>

      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlog",
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
        (response) => {
          response.json().then((data) => {
                this.articles = data.slice(0, 3)
              }
          )
        }, (response) => {
          console.log('erreur', response)
        }
    )
  }
}
</script>

<style scoped>


.cardImg {
  float: left;
}
</style>