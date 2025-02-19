<script setup>
import LogoIcon from "@/assets/img/LogoIcon.vue";
import AccountIcon from "@/assets/img/AccountIcon.vue";
</script>

<template>
  <header class="header">
    <LogoIcon />
    <div class="nav">
      <div class="nav-links">
        <router-link class="nav-links-item" to="/home">Home</router-link>
        <router-link class="nav-links-item" to="">Movies</router-link>
        <router-link class="nav-links-item">About</router-link>
      </div>
      <div class="nav-user-img">
        <AccountIcon />
      </div>
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
  border: solid 2px var(--border-color);
  border-radius: 15px;
  z-index: 10000;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}

@media screen and (max-width: 768px) {
  .header {
    width: 90%;
  }
}
</style>
