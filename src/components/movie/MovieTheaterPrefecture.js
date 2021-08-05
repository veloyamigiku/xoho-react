import MovieTheaterItem from './MovieTheaterItem';

const MovieTheaterPrefecture = (props) => {

  var movieTheaterItemList = [];
  if (props.data.prefecture && props.data.theater && props.data.theater.length > 0) {
    props.data.theater.forEach(function (movieTheater, movieTheaterIdx) {
      movieTheaterItemList.push(
        <MovieTheaterItem
          data={
            movieTheaterIdx === 0 ?
            { ...movieTheater, ...{pref: props.data.prefecture.name}} : movieTheater
          }
          key={'MovieTheater' + movieTheaterIdx} />
      );
    })
  }
  return (
    <div>
      {movieTheaterItemList}
    </div>
  );
}

export default MovieTheaterPrefecture;
