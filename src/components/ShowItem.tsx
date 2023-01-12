import { Show } from '../models/Show';

const ShowItem = ({
  title,
  name,
  backdrop_path,
  vote_average,
  index,
  length,
}: Partial<Show> & { index: number; length: number }) => {
  return (
    <div id={'slide' + index.toString()} className="carousel-item relative w-full">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt="poster"
        className="w-full h-screen"
      />
      <p className="top-4 left-20 absolute text-8xl italic font-medium tracking-widest">
        {title ? title : name}
      </p>
      {vote_average && (
        <p className="bottom-2 right-8 absolute text-4xl font-medium">
          <i className="fa fa-heart text-red-500 mr-2"></i>
          {(vote_average * 10).toFixed(2) + '%'}
        </p>
      )}

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${length - 1 > index ? index + -1 : 0}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a href={`#slide${index + 1}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default ShowItem;
