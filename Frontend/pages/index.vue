<template>
  <div>
    <Navbar />
    <Homepage />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
import Homepage from '~/components/Homepage.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    Homepage,
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
