<template>
  <section class="page-section bg-gray-100" id="portfolio">
    <div class="container mx-auto">
      <div class="text-center">
        <h2 class="section-heading text-3xl font-extrabold">Recipe</h2>
        <h3 class="section-subheading text-gray-600">Bikinnya gampang kok!</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(recipe, index) in recipes" :key="index" class="mb-8">
          <!-- Use a regular anchor tag to navigate to the recipe page -->
          <a :href="'/recipe/' + index" class="recipe-link">
            <div class="relative">
              <button @click="openModal(index)" class="absolute inset-0 w-full h-full bg-transparent">
                <div class="absolute inset-0 flex items-center justify-center">
                  <i class="fas fa-plus fa-3x text-white"></i>
                </div>
              </button>
              <img class="w-full h-full object-cover" :src="recipe.image" :alt="recipe.name" />
            </div>
            <div class="text-center mt-4">
              <div class="font-bold text-lg">{{ recipe.name }}</div>
              <div class="text-gray-600">{{ recipe.description }}</div>
            </div>
          </a>
        </div>
      </div>

      <div v-for="(recipe, index) in recipes" :key="index" class="mb-8 recipe-item animated fadeIn" @mouseover="handleHover(index)" @mouseout="handleHover(null)">
        <b-modal v-if="activeModal === index" :title="recipe.name" @hidden="closeModal(index)">
          <Detail :recipe="recipe" />
          <button class="btn btn-secondary" @click="closeModal(index)">Close</button>
        </b-modal>
      </div>
    </div>
  </section>
</template>
  
<script>
 import Detail from '~/components/Detail.vue';
 import recipes from '~/assets/recipes.js';

  export default {
    components: {
      Detail,
    },
    data() {
      return {
        activeModal: null,
        hoveredIndex: null,
        recipes: recipes,
      };
    },
    methods: {
      openModal(index) {
        this.activeModal = index;
      },
      closeModal(index) {
        this.activeModal = null;
      },
      handleHover(index) {
        this.hoveredIndex = index;
      },
      navigateToRecipe(index) {
        this.$router.push({ path: `/Detail/${index}` });
      },
    },
  };
  </script>
  
<style scoped>
  .recipe-item .fa-plus {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .recipe-item:hover .fa-plus {
    opacity: 1;
  }

  .animated {
    animation-duration: 1s;
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .recipe-link {
    text-decoration: none;
    color: inherit;
  }
</style>
  