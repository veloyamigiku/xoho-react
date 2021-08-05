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
  }
  return (
    <div>
      {movieTheaterPrefectureList}
    </div>
  );
}

export default MovieTheaterArea;
