<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <nuxt-link to="/">
        <img src="~/static/images/logo.png" alt="Logo" />
      </nuxt-link>
    </div>
    <div class="navbar__links">
      <nuxt-link to="/" class="navbar__link">Home</nuxt-link>
      <nuxt-link to="/about" class="navbar__link">About</nuxt-link>
      <nuxt-link to="/blog" class="navbar__link">Blog</nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
/* Styling bisa disesuaikan dengan kebutuhan */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #303030; /* Warna abu-abu */
}

.navbar__links {
  display: flex;
  gap: 20px;
}

.navbar__link {
  text-decoration: none;
  color: rgb(228, 83, 73); /* Warna pink tua */
  font-weight: bold; /* Menjadikan teks bold */
}
</style>
