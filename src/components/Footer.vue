<template>
  <div class="container">
    <span>&copy; {{ new Date().getFullYear() }} Noah Sanchez. All Rights Reserved</span>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.container {
  width: 95%;
  font-size: 1rem !important;
  margin: auto;
  font-size: 3rem;
  color: grey;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>