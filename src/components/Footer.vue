<template>
  <div class="container">
    <span>&copy; Noah Sanchez {{ new Date().getFullYear() }}</span>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.container {
  width: 300px;
  margin: auto;
  font-size: 25px;
}
</style>