<script setup>
import LogoIcon from "@/assets/img/LogoIcon.vue";
import AccountIcon from "@/assets/img/AccountIcon.vue";
</script>

<template>
  <div class="header">
    <div class="nav">
      <LogoIcon />
      <ul class="nav-list">
        <li class="nav-list-item">Home</li>
        <li class="nav-list-item">Movies</li>
        <li class="nav-list-item">About</li>
        <li class="nav-list-item">Contacts</li>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--block-color);
  padding: 10px 0;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
</style>
