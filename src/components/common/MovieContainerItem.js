import classes from './MovieContainerItem.module.css';
import MovieGroup from "./MovieGroup"
import MovieHeader from "./MovieHeader"

const MovieContainerItem = function(props) {
  return (
    <div className={classes.MovieContainerItem}>
      <MovieHeader data={props.data} />
      <MovieGroup data={props.data.movie} />
    </div>
  );
}

export default MovieContainerItem;
