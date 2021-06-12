import classes from "./MovieGroup.module.css";
import Movie from "./Movie";

const MovieGroup = function(props) {

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
    <div className={classes.MovieGroup}>{movieList}</div>
  );
  
}

export default MovieGroup;
