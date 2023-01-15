import { Link } from 'react-router-dom';

import { ShowI } from '../models/Show';

const ShowItem = ({
  id,
  title,
  name,
  backdrop_path,
  vote_average,
  media_type,
}: ShowI) => {
  return (
    <div className="relative w-full h-screen">
      <Link className="w-full" to={`show/${id}`} state={{ media_type }}>
        <img
          className="w-full h-screen"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={`poster-${title}`}
        />

        <p className="top-4 left-20 absolute text-8xl italic font-medium tracking-widest">
          {title ? title : name}
        </p>
        {vote_average && (
          <p className="bottom-8 right-8 absolute text-4xl font-medium">
            <i className="fa fa-heart text-red-500 mr-2"></i>
            {(vote_average * 10).toFixed(2) + '%'}
          </p>
        )}
      </Link>
    </div>
  );
};

export default ShowItem;
