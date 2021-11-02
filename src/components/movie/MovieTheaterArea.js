import classes from './MovieTheaterArea.module.css';
import MovieTheaterPrefecture from './MovieTheaterPrefecture';

const MovieTheaterArea = (props) => {
  var movieTheaterPrefectureList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movieTheaterPrefecture, movieTheaterPrefectureIdx) {
      movieTheaterPrefectureList.push(
        <MovieTheaterPrefecture
          key={'MovieTheaterPrefecture' + movieTheaterPrefectureIdx}
          data={movieTheaterPrefecture} />
      );
    });
  } else {
    movieTheaterPrefectureList.push(
      <div
        className={classes.MovieTheaterNoPrefecture}
        key={'MovieTheaterPrefecture0'}>
        この地域では上映中の劇場はありません。
      </div>
    );
  }

  return (
    <div>
      {movieTheaterPrefectureList}
    </div>
  );
}

export default MovieTheaterArea;
