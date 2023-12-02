<template>
    <div class="recipe-details">
      <h2>{{ recipe.name }}</h2>
      <div class="image-container">
        <img :src="recipe.image" :alt="recipe.name" />
      </div>
      <p class="description" style="text-align: center;"><em>{{ recipe.description }}</em></p>
      <div class="details"><strong>{{ recipe.details }}</strong></div>
      <div v-html="recipe.bahan"></div>
      <div v-html="recipe.cara"></div>
      <p class="ready" style="text-align: center;">{{ recipe.ready }}</p>
    </div>
  </template>
  
  <script>
  import { getRecipeDetails } from '~/assets/recipes.js';
  export default {
    async asyncData({ params }) {
      const recipeId = params.id;

      const recipeDetails = await getRecipeDetails(recipeId);
      
      return {
        recipe: recipeDetails,
      };
    },
  };
  </script>
  <style scoped>
  .recipe-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .image-container {
    text-align: center;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .details {
    line-height: 1.6;
  }
  
  </style>