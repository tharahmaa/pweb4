<template>
    <div>
      <Navbar />
      <Resep />
      <Footer />
    </div>
  </template>
  
  <script>
  import Vue from 'vue';
  import Navbar from '~/components/Navbar.vue';
  import Resep from '~/components/Resep.vue';
  import Footer from '~/components/Footer.vue';
  
  export default Vue.extend({
    name: 'IndexPage',
    components: {
      Navbar,
      Resep,
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
  