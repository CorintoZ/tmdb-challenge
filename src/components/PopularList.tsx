import { useEffect, useState } from 'react';

import { fetchTrending } from '../api/tmdb';
import { Show } from '../models/Show';
import ShowItem from './ShowItem';

const PopularList = () => {
  const [popularResults, setPopularResults] = useState<Partial<Show>[]>([]);
  useEffect(() => {
    fetchTrending().then((trending) => {
      const results = trending.results as Show[];
      setPopularResults(
        results.map(({ id, title, name, backdrop_path, vote_average }) => ({
          id,
          title,
          name,
          backdrop_path,
          vote_average,
        })),
      );
    });
  }, []);

  return (
    <div className="carousel w-full h-screen">
      {popularResults.map((result, index) => (
        <ShowItem
          index={index}
          length={popularResults.length}
          key={result.id}
          {...result}
        />
      ))}
    </div>
  );
};

export default PopularList;
