import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchSimilarShows } from '../api/tmdb';
import { ShowContext, ShowContextType } from '../contexts/show.context';
import { ShowI } from '../models/Show';

const ShowDetails = () => {
  const { getShow } = useContext(ShowContext) as ShowContextType;
  const { showId } = useParams();
  const navigate = useNavigate();
  const [similarShows, setSimilarShows] = useState<ShowI[] | undefined>(undefined);
  const [show, setShow] = useState<Partial<ShowI> | undefined>(undefined);

  useEffect(() => {
    if (showId)
      getShow(parseInt(showId)).then((show) => {
        if (!show) {
          navigate('/');
          return;
        }
        setShow(show);
        fetchSimilarShows(showId.toLocaleString(), show.media_type).then((similar) => {
          const results = similar.results as ShowI[];
          setSimilarShows(results);
        });
      });
  }, [showId, show]);

  if (!show) return <div>Loading Show...</div>;

  return (
    <div className="grid grid-cols-3 grid-flow-col grid-rows-2 gap-4 w-full h-screen p-16">
      <button className="absolute top-5 left-5 font-medium" onClick={() => navigate('/')}>
        BACK
      </button>
      <div className="row-span-1 justify-self-center">
        <img
          className="card w-full shadow-xl h-full"
          src={`https://image.tmdb.org/t/p/w400${show?.poster_path}`}
          alt=""
        />
      </div>
      <div className="row-span-1 col-span-3 justify-self-center flex flex-row gap-x-4 mt-6 p-4 space-x-4 bg-neutral rounded-box overflow-hidden overflow-x-auto">
        {similarShows &&
          similarShows.map((show) => (
            <div className="carousel-item" key={show.id}>
              <img
                className="card min-w-max-40 w-40 shadow-xl h-full"
                src={`https://image.tmdb.org/t/p/w400/${show?.poster_path}`}
                alt=""
              />
            </div>
          ))}
      </div>
      <div className="row-span-1 col-span-2 grid grid-cols-1 grid-rows-3">
        <div className="row-span-1 col-span-1 text-xl italic font-medium">
          {show?.title}
        </div>
        <div className="row-span-1 col-span-1">{show?.overview}</div>
      </div>
    </div>
  );
};

export default ShowDetails;
