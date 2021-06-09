import classes from "./MovieContainer.module.css";
import Movie from "./Movie";

const MovieContainer = function(props) {

  var movieList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movie, movieIdx) {
      movieList.push(
        <Movie
          data={movie}
          key={'Movie' + movieIdx} />
      );
    });
  }

  return (
    <div className={classes.MovieContainer}>{movieList}</div>
  );
  
}

export default MovieContainer;
