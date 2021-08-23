import classes from './MovieTheaterItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieTheaterItem = (props) => {
  return (
    <div className={classes.MovieTheaterItem}>
      {props.data.pref && <div className={classes.MovieTheaterItemPrefecture}>{props.data.pref}</div>}  
      <div className={classes.MovieTheaterItemGroup}>
        <div className={classes.MovieTheaterItemTitle}>TOHOシネマズ {props.data.name}</div>
        <FontAwesomeIcon className={classes.MovieTheaterItemIcon} icon={['fas', 'chevron-down']} />
      </div>
    </div>
  );
}

export default MovieTheaterItem;
