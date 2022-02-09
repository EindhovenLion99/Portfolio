<template>
  <Navbar/>
  <router-view />
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import './App.css'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  }
}
</script>

<style>
</style>
