<script setup>
import LogoIcon from "@/assets/img/LogoIcon.vue";
import AccountIcon from "@/assets/img/AccountIcon.vue";
</script>

<template>
  <div class="header">
    <LogoIcon />
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">Home</li>
        <li class="nav-list-item">Movies</li>
        <li class="nav-list-item">About</li>
      </ul>
      <div class="nav-user-img">
        <AccountIcon />
      </div>
    </div>
  </div>
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
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 80%;
}

@media screen and (max-width: 768px) {
  .header {
    width: 90%;
  }
}
</style>
