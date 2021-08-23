import classes from './MovieTheaterContent.module.css';
import MovieTheaterArea from './MovieTheaterArea';

const MovieTheaterContent = (props) => {

  var movieTheaterAreaList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movieTheaterArea, movieTheaterAreaIdx) {
      movieTheaterAreaList.push(
        <MovieTheaterArea
          key={'MovieTheaterArea' + movieTheaterAreaIdx}
          data={movieTheaterArea.prefectures} />
      );
    });
  }
  return (
    <div className={classes.MovieTheaterContent}>
      {movieTheaterAreaList}
    </div>
  );
}

export default MovieTheaterContent;
