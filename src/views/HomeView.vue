<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<template>
  <div class="home">
    <HeaderItem />
    <div class="home-bg"></div>
    <div class="home-container">
      <h1 class="home-title">
        Movie<span class="home-title-x">X</span><br />
        Millions of movies, TV shows and people to discover. Explore now.
      </h1>
      <router-link class="button"> Select movie </router-link>
    </div>

    <FooterItem />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
}
.home-bg {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100dvh;
  background: url(./../assets/img/home_bg.jpg) center center/cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: blur(5px) brightness(0.5);
}
.home-container {
  width: 80%;
  z-index: 1000;
}
.home-title {
  font-size: 4rem;
}
.home-title-x {
  font-size: 4rem;
  color: var(--brand-color);
  text-shadow: 1px 1px 2px #000000;
}
.button {
  display: block;
  margin-top: 50px;
}
</style>
