<template>
    <div class="col-lg-4">
      <div class="team-member">
        <img :src="photo" alt="..." class="mx-auto rounded-full" />
        <h4 class="text-xl font-semibold">{{ name }}</h4>
        <p class="text-gray-600">{{ description }}</p>
        <div class="social-links">
          <!-- <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            class="inline-block bg-dark text-white px-2 py-1 mx-2"
            aria-label="Social Profile"
          >
            <i :class="link.icon"></i>
          </a> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      photo: String,
      description: String,
      socialLinks: Array,
    },
  };
  </script>
  
  <style scoped>

  </style>
  