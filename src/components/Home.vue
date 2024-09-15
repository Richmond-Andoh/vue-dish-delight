<template>
  <h1>Home Page is ready</h1>
</template>

<script>
export default {
  mounted() {
    const user = localStorage.getItem('users')
    if (!user) {
      this.$router.push('/signup')
    }
  }
}
</script>
