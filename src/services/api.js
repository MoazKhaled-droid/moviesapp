const BASE_URL = import.meta.env.VITE_TMDP_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDP_API_KEY;
const fetchData = async (endpoint, errorMessage) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
};

export const getNowPlayingMovies = async (page) => {
  return await fetchData(
    `/movie/now_playing?api_key=${API_KEY}&page=${page}`,
    "Failed to load  movies",
  );
};

export const getNowPlayingTvShows = async (page) => {
  return await fetchData(
    `/tv/on_the_air?api_key=${API_KEY}&page=${page}`,
    "Failed to load TV shows",
  );
};

export const getMovieDetails = async (movieId) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }
  return await fetchData(
    `/movie/${movieId}?api_key=${API_KEY}&append_to_response=recommendations`,
    "Failed to load movie details",
  );
};

export const getTvShowDetails = async (tvId) => {
  if (!tvId) {
    throw new Error("TV Show ID is required");
  }
  return await fetchData(
    `/tv/${tvId}?api_key=${API_KEY}&append_to_response=recommendations`,
    "Failed to load TV show",
  );
};

export const getSearchResults = async (query, page) => {
  if (!query) {
    throw new Error("Search query is required");
  }
  return await fetchData(
    `/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
    "Failed to load search results",
  );
};
