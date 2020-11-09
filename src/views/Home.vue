<template>
  <b-container fluid class="home">
    <b-row>
      <b-col sm="3">
        <HomeFilter news="0" projects="0" skills="0"/>
      </b-col>
      <b-col sm="8">
        <transition name="home-components">
          <NewsBlog v-if="$store.state.home.news"/>
        </transition>
        <br>
        <transition name="home-components">
          <Projects v-if="$store.state.home.projects"/>
        </transition>
        <br>
        <transition name="home-components">
          <Skills v-if="$store.state.home.skills"/>
        </transition>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewsBlog from "@/components/NewsBlog";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HomeFilter from "@/components/HomeFilter";

export default {
  name: 'Home',
  components: {
    NewsBlog,
    Projects,
    Skills,
    HomeFilter,
  }
}
</script>

<style>

.home-components-enter
{

  opacity: 0;
  transform: translateX(-45px);
}

.home-components-leave-to
{
  opacity: 0;
  transform: translateX(45px);
}


.home-components-leave-active, .home-components-enter-active{
  transition: all 1s;
}

</style>
