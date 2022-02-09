<template>
  <div class="container">
    <div class="pages">
      <span class="button under">Index</span>
      <span class="button under">Studies</span>
      <span class="button under">Projects</span>
      <span class="button under">Software</span>
    </div>
    <div class="bar">
      <i class="fas fa-bars"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.container {
  padding: 1% 3%;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pages {
  display: flex;
}

span {
  font-size: 2rem !important;
}

.under::after {
  content: '';
  height: 2px;
  width: 0%;
  display: block;
  background-color: white;
  transition: .5s ease-in-out;
}

.under:hover::after {
  content: '';
  height: 2px;
  width: 100%;
  display: block;
  background-color: white;
}

.button {
  margin-left: 15px;
  margin-right: 15px;
  font-size: 3rem;
  cursor: pointer;
}

.bar {
  display: none;
}


@media screen and (max-width: 1100px) {
  .pages {
    display: none;
  }
  .name {
    font-size: 2.5rem;
  }
  .bar {
    display: contents;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 30px;
  }
}
</style>