<script setup>
import { ref, onMounted } from "vue";
import { getPopularMovies } from "@/api/tmdb";
const movies = ref([]);

onMounted(async () => {
  movies.value = await getPopularMovies();
});
</script>

<template>
  <main class="movies">
    <div class="container">
      <h2 class="movies-title">Trending</h2>
      <div class="movies-list">
        <router-link
          v-for="movie in movies"
          :to="`/movie/${movie.id}`"
          :key="movie.id"
          :movie="movie"
          class="movie-card"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            :alt="movie.title"
            loading="lazy"
          />
          <h3 class="movie-title">{{ movie.title }}</h3>
          <p class="release_date">{{ movie.release_date }}</p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.movies {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  margin-top: 100px;
}
.movies-title {
  font-size: 2rem;
}
.movies-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
  grid-gap: 20px;
  margin-top: 50px;
}
.movie-card {
  cursor: pointer;
  background-color: var(--block-color);
  border: solid 1px var(--border-color);
  padding: 15px 10px;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  height: fit-content;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  border-radius: 15px;
}
.movie-title {
  margin-top: 10px;
  font-size: 1.2rem;
}
.release_date {
  margin-top: 10px;
  color: #7a7a7a;
}
</style>
