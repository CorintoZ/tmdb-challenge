const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingUrl = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;

export const fetchTrending = () => fetch(fetchTrendingUrl).then((res) => res.json());

export const fetchSimilarShows = (showId: string, media_type: string) =>
  fetch(`${BASE_URL}/${media_type}/${showId}/similar?api_key=${API_KEY}`).then((res) =>
    res.json(),
  );

export const fetchShow = (showId: string, mediaType: string) =>
  fetch(`${BASE_URL}/${mediaType}/${showId}?api_key=${API_KEY}`).then((res) =>
    res.json(),
  );
