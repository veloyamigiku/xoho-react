import classes from './MovieTheaterItemHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieTheaterItemHeader = (props) => {
  
  const clickMovieTheaterItemGroup = () => {
    props.onClick();
  }

  return (
    <div className={classes.MovieTheaterItemHeader}>
      {props.data.pref && <div className={classes.MovieTheaterItemHeaderPrefecture}>{props.data.pref}</div>}  
      <div
        className={classes.MovieTheaterItemHeaderGroup}
        onClick={() => clickMovieTheaterItemGroup()}>
        <div className={classes.MovieTheaterItemHeaderTitle}>TOHOシネマズ {props.data.name}</div>
        <FontAwesomeIcon className={classes.MovieTheaterItemHeaderIcon} icon={['fas', 'chevron-down']} />
      </div>
    </div>
  );
}

export default MovieTheaterItemHeader;
