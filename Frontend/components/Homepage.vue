<template>
  <div class="home-page">
    <div class="background-image">
      <h1 class="main-text">Creating Masterpieces<br>in the Kitchen</h1>
      <p class="sub-text">Share Delicious Recipes and Inspire Taste Buds</p>
      <button class="blog-button" @click="goToBlog">Visit Blog</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToBlog() {
      // Redirect to the blog page when the button is clicked
      this.$router.push('/blog');
    }
  }
}
</script>

<style>

@font-face {
  font-family: 'DancingScript-Regular';
  src: url('~/static/font/DancingScript-Regular.ttf') format('woff');
}

@font-face {
  font-family: 'Caveat';
  src: url('~/static/font/Caveat-Regular.ttf') format('woff');
}

.home-page {
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  text-align: center; /* Untuk membuat semua elemen di dalamnya menjadi terpusat secara horizontal */
  background-image: url('~/static/images/background.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.main-text {
  font-family: 'DancingScript-Regular', cursive; 
  text-align: center;
  color: #ffffff;
  font-size: 5.5rem; 
  margin-top: 170px; 
}

.sub-text {
  font-family: 'Caveat', cursive; 
  text-align: center;
  color: #ffffff;
  font-size: 2rem;

}

.blog-button {
  font-family: 'Caveat', cursive; 
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 1.5rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none; /* Remove default outline */
}

.blog-button:hover {
  background: #ffffff;
  color: #000000;
}
</style>
