<template>
    <section class="page-section bg-gray-100" id="why">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="section-heading text-3xl font-extrabold">Why Our Recipe?</h2>
          <h3 class="section-subheading text-gray-600">Resep-resep kami yang disusun dengan hati-hati.<br>Resep yang membangkitkan selera anda</h3>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(recipe, index) in recipes" :key="index" class="mb-8">
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
          </div>
        </div>
  
        <!-- Modals -->
        <div v-for="(recipe, index) in recipes" :key="index">
          <b-modal v-if="activeModal === index" title="Modal title" @hidden="closeModal(index)">
            <p>{{ recipe.details }}</p>
            <button class="btn btn-secondary" @click="closeModal(index)">Close</button>
          </b-modal>
        </div>
      </div>
    </section>
  </template>
  
<script>
  export default {
    data() {
      return {
        activeModal: null,
        hoveredIndex: null,
        recipes: [
          {
            name: 'Bahan Berkualitas',
            description: 'Bahan yang berkualitas sangat penting dalam proses memasak dan mendapatkan hasil akhir yang memuaskan',
            image: '/bahan.jpg',
            details: `
            Bahan berkualitas adalah bahan yang segar, berasal dari sumber terpercaya, sesuai dengan musim, memiliki kualitas produk yang baik, dan bebas dari bahan kimia berbahaya. Penggunaan bahan berkualitas dalam memasak akan menghasilkan hidangan yang lebih lezat, tekstur yang baik, dan kesan visual yang menarik. Pastikan untuk memilih bahan yang terbaik yang tersedia untuk mencapai hasil yang memuaskan.
            `,
          },
          {
            name: 'Cukup terjangkau',
            description: 'Bahan yang dipakai bisa disesuaikan dengan budget masing-masing',
            image: '/shop.jpg',
            details: `
            Cukup terjangkau berarti memiliki harga yang masuk akal dan dapat dijangkau oleh sebagian besar orang. Bahan yang cukup terjangkau tidak terlalu mahal atau eksklusif, sehingga dapat digunakan dalam resep-resep sehari-hari tanpa memberatkan anggaran. Memilih bahan yang cukup terjangkau memungkinkan kita untuk tetap menciptakan hidangan yang lezat dan bergizi tanpa harus mengeluarkan biaya yang besar.
            `,
          },
          {
            name: 'Rasa premium',
            description: 'Rasa premium mengacu pada citarasa yang tinggi',
            image: '/chef.jpg',
            details: `
            Rasa premium mengacu pada citarasa yang tinggi, kualitas yang istimewa, dan pengalaman yang luar biasa dalam konsumsi makanan atau minuman. Hidangan dengan rasa premium biasanya memiliki kombinasi yang kompleks dan seimbang dari bahan-bahan berkualitas tinggi yang menghasilkan sensasi kenikmatan yang tinggi di lidah. Makanan atau minuman dengan rasa premium memberikan pengalaman gastronomi yang istimewa dan memuaskan bagi para penikmatnya.
            `,
          },
        ],
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
</style>
  