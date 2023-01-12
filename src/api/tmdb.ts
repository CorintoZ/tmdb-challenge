const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingUrl = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;

export const fetchTrending = () => fetch(fetchTrendingUrl).then((res) => res.json());
