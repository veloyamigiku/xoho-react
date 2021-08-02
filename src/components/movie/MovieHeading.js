import classes from './MovieHeading.module.css';

const MovieHeading = (props) => {

  return (
    <div className={classes.MovieHeading}>
      <div className={classes.MovieHeadingTitle}>{props.data.title}</div>
    </div>
  )
}

export default MovieHeading;
