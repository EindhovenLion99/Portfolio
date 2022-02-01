<template>
  <H1>Noah Sanchez</H1>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
#app {
  font-family: 'Zen Kurenaido', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body {
  background: #202023;
}
</style>
