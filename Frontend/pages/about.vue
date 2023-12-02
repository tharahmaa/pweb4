<template>
  <div>
    <Navbar />
    <About />
    <Why />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
import Team from '~/components/Team.vue';
import Footer from '~/components/Footer.vue';
import About from '~/components/About.vue';
import Why from '~/components/Why.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    About,
    Why,
    Team,
    Footer,
},
  head(){
    return{
      title: 'Resep Desserts',
    };
  },
});
</script>

<!-- Add styles specific to the index page if needed -->
<style scoped>
/* Your styles here */
</style>
