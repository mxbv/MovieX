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
