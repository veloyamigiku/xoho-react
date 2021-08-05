import MovieTheaterContent from './MovieTheaterContent';
import MovieTheaterTab from './MovieTheaterTab';

const MovieTheater = (props) => {
  return (
    <div>
      <MovieTheaterTab data={props.data} />
      <MovieTheaterContent data={props.data} />
    </div>
  );
}

export default MovieTheater;
