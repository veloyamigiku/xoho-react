import classes from './MovieTheaterItem.module.css';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';
import MovieTheaterItemContent from './MovieTheaterItemContent';
import { useRef } from 'react';

const MovieTheaterItem = (props) => {

  const clickHeader = () => {
    movieTheaterItemContentRef.current.getMovieScheduleDateScreen();
  };

  const movieTheaterItemContentRef = useRef();

  return (
    <div className={classes.MovieTheaterItem}>
      <MovieTheaterItemHeader
        data={props.data}
        onClick={() => clickHeader()} />
      <MovieTheaterItemContent
        ref={movieTheaterItemContentRef} />
    </div>
  );
}

export default MovieTheaterItem;
