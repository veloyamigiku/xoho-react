import classes from './MovieHeader.module.css';
import { getDayOfWeekStr } from "../../utils/common/date";

const MovieHeader = function(props) {
  const dayOfWeekStr = getDayOfWeekStr(
    props.data.year,
    props.data.month,
    props.data.day);
  return (
    <div className={classes.MovieHeader}>
      <div className={classes.MovieHeaderTitle}>
        { props.data.month }/{ props.data.day }({ dayOfWeekStr })
      </div>
    </div>
  );
}

export default MovieHeader;
