import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

const MovieTheaterItemContent = (props) => {
  return (
    <div>
      <MovieTheaterScheduleDate data={props.dateData} />
      <MovieTheaterScheduleScreen data={props.screenData} />
    </div>
  );
}

export default MovieTheaterItemContent;
