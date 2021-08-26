import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

const MovieTheaterItemContent = (props) => {
  return (
    <div>
      <MovieTheaterScheduleDate data={props.dateData} onClick={() => console.log("click MovieTheaterScheduleDate.")} />
      <MovieTheaterScheduleScreen data={props.screenData} />
    </div>
  );
}

export default MovieTheaterItemContent;
