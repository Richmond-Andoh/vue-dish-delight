<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-sm shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div class="mb-4 flex justify-between items-center">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-indigo-500" v-model="rememberMe" />
            <span class="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" class="text-indigo-500 hover:underline">Forgot Password?</a>
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Log In
        </button>
      </form>

      <p class="text-center text-gray-600 mt-4">
        Don't have an account?
        <a href="/signup" class="text-indigo-500 hover:underline">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    async handleLogin() {
      // Validate and handle login
      alert('Login successful')
    }
  }
}
</script>
