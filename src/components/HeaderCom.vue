<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="text-2xl font-bold text-gray-800">
        <router-link to="/" class="hover:text-gray-600"> Restaurant </router-link>
      </div>

      <!-- Menu Section for larger screens -->
      <nav class="hidden md:flex space-x-6 items-center">
        <router-link to="/" class="hover:text-gray-600 text-gray-800">Home</router-link>
        <router-link to="/add-restaurant" class="hover:text-gray-600 text-gray-800"
          >Add Restaurant</router-link
        >
        <router-link to="/update-restaurant" class="hover:text-gray-600 text-gray-800"
          >Update Restaurant</router-link
        >
        <router-link
          to="#"
          @click="handleLogout"
          class="hover:text-gray-600 text-white p-2 bg-red-600"
          >Logout</router-link
        >
      </nav>

      <!-- Hamburger Menu for smaller screens -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
      <nav class="px-4 py-4 space-y-2">
        <router-link to="/" class="block hover:text-gray-600 text-gray-800">Home</router-link>
        <router-link to="/add-restaurant" class="block hover:text-gray-600 text-gray-800"
          >Add Restaurant</router-link
        >
        <router-link to="/update-restaurant" class="block hover:text-gray-600 text-gray-800"
          >Update Restaurant</router-link
        >
        <a
          href="#"
          @click="handleLogout"
          class="block text-white p-2 hover:text-gray-600 bg-red-600"
          >Logout</a
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderCom',
  data() {
    return {
      isMenuOpen: false // Controls mobile menu visibility
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleLogout() {
      localStorage.removeItem('users')
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Tailwind CSS applied -->
<style scoped>
/* Optional: You can customize any styles here */
</style>
