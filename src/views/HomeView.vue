<script setup></script>

<template>
  <main class="home">
    <div class="home-bg"></div>
    <div class="container">
      <h1 class="home-title">
        Movie<span class="home-title-x">X</span><br />
        Millions of movies to discover. <br />Explore right now.
      </h1>
      <p class="home-subtitle">
        No tracking or ads. Just for fun <br />
        <a href="https://vuejs.org/" class="home-powered">Powered by Vue.js</a>
      </p>
      <router-link class="button" to="/movies">Discover movies</router-link>
    </div>
  </main>
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
.home-title {
  font-size: 4rem;
}
.home-title-x {
  font-size: 4rem;
  color: var(--brand-color);
  text-shadow: 1px 1px 2px #000000;
}
.home-subtitle {
  font-size: 1.2rem;
  margin-top: 30px;
}
.home-powered {
  font-size: 1.2rem;
  background-color: #3bcd80;
  color: #000000;
}
.button {
  display: block;
  margin-top: 50px;
  padding: 20px 30px;
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  .home-title {
    font-size: 2.2rem;
    text-wrap-style: pretty;
  }
  .home-title-x {
    font-size: 2.5rem;
    color: var(--brand-color);
    text-shadow: 1px 1px 2px #000000;
  }
  .button {
    display: block;
    margin-top: 50px;
  }
}
</style>
