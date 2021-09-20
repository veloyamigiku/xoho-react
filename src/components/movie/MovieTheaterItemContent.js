import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

const MovieTheaterItemContent = (props) => {
  return (
    <div>
      <MovieTheaterScheduleDate data={props.data.date} onClick={() => console.log("click MovieTheaterScheduleDate.")} />
      <MovieTheaterScheduleScreen data={props.data.screen} />
    </div>
  );
}

export default MovieTheaterItemContent;
