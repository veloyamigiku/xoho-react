import classes from './Movie.module.css';

const Movie = function(props) {
  return (
    <div className={classes.Movie}>
      <a
        className={classes.MovieLink}
        href={props.data.url}>
        <div>
          <div>
            <img
              className={classes.MovieImg}
              src={props.data.img_url}
              alt="MovieImg" />
          </div>
          <div className={classes.MovieTitle}>{props.data.title}</div>
        </div>
      </a>
    </div>
  );
}

export default Movie;
