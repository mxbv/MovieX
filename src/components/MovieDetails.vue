<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getMovieDetails, getMovieVideos } from "@/api/tmdb"; // Функции для получения данных

const route = useRoute();
const movie = ref({});
const video = ref(null);

onMounted(async () => {
  const movieId = route.params.id; // Получаем id фильма из URL
  movie.value = await getMovieDetails(movieId);
  video.value = await getMovieVideos(movieId); // Получаем видео трейлеры
});
</script>

<template>
  <div class="movie-details">
    <div class="container">
      <div class="movie-info-container">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :alt="movie.title"
          class="movie-poster"
        />
        <div class="movie-info">
          <h1 class="movie-title">{{ movie.title }}</h1>
          <p class="movie-info-text"><strong>Release Date :</strong> {{ movie.release_date }}</p>
          <p class="movie-info-text"><strong>Rating :</strong> {{ movie.vote_average }} / 10</p>
          <strong>What's the movie about : </strong>
          <p class="movie-info-text">{{ movie.overview }}</p>
          <p class="movie-info-text">
            <strong>Genres : </strong>
            <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
          </p>
          <p class="movie-info-text"><strong>Duration : </strong> {{ movie.runtime }} minutes</p>
          <p class="movie-info-text">
            <strong>Original language : </strong> {{ movie.original_language }}
          </p>
        </div>
      </div>
      <div v-if="video" class="trailer">
        <h3 class="trailer-title">Trailer</h3>
        <iframe
          :src="'https://www.youtube.com/embed/' + video.key"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <router-link to="/movies" class="button">Back to movie list</router-link>
    </div>
  </div>
</template>

<style scoped>
.movie-deteils {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.movie-info-container {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #0e1017;
  border: solid 1px var(--border-color);
  border-radius: 15px;
}

.movie-poster {
  width: 250px;
  height: 375px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 15px;
}

.movie-info {
  width: fit-content;
}

.movie-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.movie-info-text {
  margin-bottom: 15px;
}
span {
  margin-right: 8px;
}

.trailer {
  margin-top: 40px;
}
.trailer-title {
  margin-bottom: 20px;
  font-size: 1.5rem;
}
iframe {
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
}
</style>
