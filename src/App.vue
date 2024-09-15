<template>
  <div class="min-h-screen bg-slate-950">
    <router-view />
  </div>
</template>

<script>
import SignUpVue from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUpVue
  }
}
</script>
