<script setup>
import LogoIcon from "../assets/img/LogoIcon.vue";
</script>

<template>
  <header class="header">
    <LogoIcon />
    <div class="nav">
      <router-link class="nav-links-item" to="/home">Home</router-link>
      <router-link class="nav-links-item" to="/movies">Movies</router-link>
      <!-- <router-link class="nav-links-item" to="">About</router-link> -->
      <router-link class="nav-links-item button" to="/">Sign Up</router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 20px;
  width: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--block-color);
  padding: 10px 20px;
  border: solid 1px var(--border-color);
  border-radius: 15px;
  z-index: 10000;
  backdrop-filter: blur(15px);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 30px;
}

@media screen and (max-width: 1200px) {
  .header {
    width: 90%;
  }
}
</style>
