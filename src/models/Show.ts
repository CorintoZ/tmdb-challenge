export interface ShowI {
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  vote_average: number;
}

export interface ShowsI {
  results: ShowI[];
}
