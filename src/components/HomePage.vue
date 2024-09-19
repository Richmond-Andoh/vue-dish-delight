<template>
  <HeaderCom />

  <div class="">
    <section
      class="hero bg-cover bg-center h-screen flex items-center justify-center"
      style="background-image: url('../assets/bg.jpeg')"
    >
      <div class="text-center text-white p-8">
        <h1 class="text-5xl font-bold mb-4">Welcome to [Your Restaurant Name]</h1>
        <p class="text-xl mb-8">Experience the finest dining with our exquisite menu</p>
        <a
          href="#menu"
          class="bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >See Our Menu</a
        >
      </div>
    </section>

    <section id="featured" class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl text-white font-bold text-center mb-8">Featured Dishes</h2>
        <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
          <!-- Featured Dish Item -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="../assets/pizza1.jpeg" alt="Dish Name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
              <p class="text-gray-600 mb-4">Brief description of the dish goes here.</p>
              <span class="text-lg font-bold">$Price</span>
            </div>
          </div>
          <!-- Repeat for other featured dishes -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="../assets/pizza2.jpeg" alt="Dish Name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
              <p class="text-gray-600 mb-4">Brief description of the dish goes here.</p>
              <span class="text-lg font-bold">$Price</span>
            </div>
          </div>
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="../assets/pizza4.jpeg" alt="Dish Name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
              <p class="text-gray-600 mb-4">Brief description of the dish goes here.</p>
              <span class="text-lg font-bold">$Price</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="menu" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl text-white font-bold text-center mb-8">Our Menu</h2>
        <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Menu Item -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
            <p class="text-gray-600 mb-4">Description of the dish.</p>
            <span class="text-lg font-bold">$Price</span>
          </div>

          <!-- Repeat for other menu items -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
            <p class="text-gray-600 mb-4">Description of the dish.</p>
            <span class="text-lg font-bold">$Price</span>
          </div>

          <!-- Repeat for other menu items -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Dish Name</h3>
            <p class="text-gray-600 mb-4">Description of the dish.</p>
            <span class="text-lg font-bold">$Price</span>
          </div>
        </div>
        <!-- Repeat for other menu items -->
      </div>
    </section>

    <section id="gallery" class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl text-white font-bold text-center mb-8">Gallery</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gallery Item -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="../assets/gallery1.jpeg"
              alt="Gallery Item"
              class="w-full h-48 object-cover"
            />
          </div>
          <!-- Repeat for other gallery images -->
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; [2024] [Richy's Dish Delight]. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderCom from './HeaderCom.vue'

export default {
  components: {
    HeaderCom
  },
  mounted() {
    const user = localStorage.getItem('users')
    if (!user) {
      this.$router.push('/signup')
    } else {
      const parsedUser = JSON.parse(user)

      if (!parsedUser.id) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
