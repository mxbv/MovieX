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
  align-items: center;
  position: fixed;
  top: 20px;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--block-color);
  padding: 10px 20px;
  border: solid 2px var(--border-color);
  border-radius: 15px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 60%;
}

</style>
