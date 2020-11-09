<template>
  <div id="app">
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand ><router-link to="/"> <img class="logo" alt="Vue logo" src="./assets/logo.png"></router-link> </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item><router-link to="/">Acceuil</router-link> </b-nav-item>
              <b-nav-item><router-link to="/store">Boutique</router-link></b-nav-item>
              <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </div>
    <router-view/>

<footer>
  <b-navbar variant="dark" type="dark" class="mt-1" >
    <b-nav-item><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></b-nav-item>
    <b-nav-item> <a href="https://twitter.com"><i class="fab fa-facebook-f"></i></a> </b-nav-item>
    <b-nav-item><a href="https://twitter.com"> <i class="fab fa-instagram"></i></a></b-nav-item>
    <b-nav-item><a href="https://twitter.com"><i class="fab fa-linkedin-in"></i></a></b-nav-item>
  </b-navbar>
</footer>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {


  padding: 30px;

  a {
    font-weight: bold;
    color: grey;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app .logo{
  max-height: 75px;
}

h1,h2,h3 {
  color: #42b983;
  text-decoration: underline;
}

.card-header{
  background: #2c3e50;
  color : #42b983;
font-weight: bold;
}

.card-body{
  background: #88ba9b;
}

footer a{
  color : #42b983;
}

</style>
