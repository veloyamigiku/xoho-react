import { useRef } from 'react';
import MovieTheaterContent from './MovieTheaterContent';
import MovieTheaterTab from './MovieTheaterTab';

const MovieTheater = (props) => {

  const movieTheaterContentRef = useRef();

  const onClickTab = (tabIdx) => {
    movieTheaterContentRef.current.switchArea(tabIdx);
  }

  return (
    <div>
      <MovieTheaterTab
        data={props.data}
        onClickTab={onClickTab} />
      <MovieTheaterContent
        data={props.data}
        ref={movieTheaterContentRef} />
    </div>
  );
}

export default MovieTheater;
