<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-sm shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="name">Full Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-blue-300"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-blue-300"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-blue-300"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="confirmPassword"
            >Confirm Password</label
          >
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-gray-600 mt-4">
        Already have an account?
        <a href="/login" class="text-indigo-500 hover:underline">Log In</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import bcrypt from 'bcryptjs'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  methods: {
    async registerUser() {
      if (this.password !== this.confirmPassword) {
        // register user logic here
        confirm('Password do not match my brother')
        return
      }

      try {
        const res = await axios.post('http://localhost:3000/user', {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })

        const users = res.data
        if (res.status === 201) {
          localStorage.setItem('users', JSON.stringify(users))
          this.$router.push('/login')
        }
      } catch (error) {
        console.error(error.message)
      }
    }
  },

  mounted() {
    const user = localStorage.getItem('users')
    if (user) {
      this.$router.push('/login')
    }
  }
}
</script>
