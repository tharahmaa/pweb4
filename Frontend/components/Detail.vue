<!-- Detail.vue -->
<template>
    <div>
      <h2>{{ recipe.name }}</h2>
      <img :src="recipe.image" :alt="recipe.name" />
      <p>{{ recipe.description }}</p>
      <div v-html="recipe.details"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  