import axios from "axios";
const API_KEY = "094e83aa5dee6fdd2350d0c6aadad1d4";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// Get popular movies
export const getPopularMovies = async (page = 1) => {
  const { data } = await tmdb.get("movie/popular", { params: { page } });
  return data.results;
};

// Get movie details by ID
export const getMovieDetails = async (id) => {
  const { data } = await tmdb.get(`/movie/${id}`);
  return data;
};
// Search movies
export const searchMovies = async (query, page = 1) => {
  const { data } = await tmdb.get("/search/movie", {
    params: { query, page },
  });
  return data.results;
};
export const getMovieVideos = async (movieId) => {
  const { data } = await tmdb.get(`/movie/${movieId}/videos`);
  return data.results.length > 0 ? data.results[0] : null; // Возвращаем первый доступный трейлер
};

export default tmdb;
