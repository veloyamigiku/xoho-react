import MovieTheaterTab from './MovieTheaterTab';

const MovieTheater = (props) => {
  return (
    <div>
      <MovieTheaterTab data={props.data} />
    </div>
  );
}

export default MovieTheater;
