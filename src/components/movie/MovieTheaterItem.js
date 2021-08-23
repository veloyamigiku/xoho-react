import classes from './MovieTheaterItem.module.css';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';

const MovieTheaterItem = (props) => {
  return (
    <div className={classes.MovieTheaterItem}>
      <MovieTheaterItemHeader data={props.data} />
    </div>
  );
}

export default MovieTheaterItem;
