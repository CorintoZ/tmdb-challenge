import { Carousel } from 'flowbite-react';
import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { fetchTrending } from '../api/tmdb';
import { ShowContext, ShowContextType } from '../contexts/show.context';
import { ShowI, ShowsI } from '../models/Show';
import ShowItem from './ShowItem';

export const rootLoader = async (): Promise<ShowsI> => {
  const results = await fetchTrending();
  if (!results) throw new Error('Not available shows');
  return results;
};

const PopularList = () => {
  const { results: shows } = useLoaderData() as ShowsI;
  const { setShows } = useContext(ShowContext) as ShowContextType;

  useEffect(() => {
    setShows(shows);
  }, []);

  return (
    <Carousel>
      {shows.map((props) => (
        <ShowItem key={props.id} {...props} />
      ))}
    </Carousel>
  );
};

export default PopularList;
