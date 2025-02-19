<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPopularMovies } from "@/api/tmdb";

const movies = ref([]);
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);

const page = ref(Number(route.query.page) || 1);

const loadMovies = async () => {
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    const newMovies = await getPopularMovies(page.value);
    movies.value = newMovies;
  } catch (error) {
    console.error("Ошибка загрузки фильмов:", error);
  }

  isLoading.value = false;
};

watch(
  () => route.query.page,
  (newPage) => {
    page.value = Number(newPage) || 1;
    loadMovies();
  }
);

onMounted(() => {
  loadMovies();
});

const changePage = (newPage) => {
  if (newPage < 1) return;
  router.push({ query: { page: newPage } });
};
</script>

<template>
  <main class="movies">
    <div class="container">
      <h2 class="movies-title">Trending</h2>
      <div class="movies-list">
        <router-link
          v-for="movie in movies"
          :key="movie.id"
          :to="`/movie/${movie.id}`"
          class="movie-card"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            :alt="movie.title"
            loading="lazy"
          />
          <h3 class="movie-title">{{ movie.title }}</h3>
          <p class="movie-raiting">Rating : {{ movie.vote_average }} / 10</p>
          <p class="release_date">{{ movie.release_date }}</p>
        </router-link>
      </div>
      <div class="pagination">
        <button @click="changePage(page - 1)" :disabled="page <= 1" class="button">Previous</button>
        <span>Page {{ page }}</span>
        <button @click="changePage(page + 1)" class="button">Next</button>
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
  margin-bottom: 100px;
}
.movies-title {
  font-size: 2rem;
  font-weight: 400;
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
.movie-raiting {
  margin-top: 10px;
  color: #7a7a7a;
}
.release_date {
  margin-top: 10px;
  color: #7a7a7a;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.button:disabled {
  background: gray;
  cursor: not-allowed;
}
@media screen and (max-width: 768px) {
  .movies-list {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 50px;
  }
  .movie-card:hover {
    transform: scale(1);
  }
}
</style>
