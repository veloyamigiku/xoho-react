import classes from './MovieSchedule.module.css';
import { getDateStr, getScheduleDateList } from "../../utils/coming_soon/schedule";

const MovieSchedule = function(props) {

  var movieScheduleDateWrapList = [];
  if (props.data && props.data.length > 0) {
    getScheduleDateList(props.data).forEach(function (movieScheduleDate, movieScheduleDateIdx) {
      const dateStr = getDateStr(
        movieScheduleDate.year,
        movieScheduleDate.month,
        movieScheduleDate.day);
      movieScheduleDateWrapList.push(
        <div
          className={classes.MovieScheduleDateWrap}
          key={'MovieScheduleDateWrap' + movieScheduleDateIdx}>
          <div
            className={classes.MovieScheduleDate}
            onClick={() => props.tellDateIdxToParent(movieScheduleDate.idx)}>{ dateStr }</div>
        </div>
      );
    });
  }

  return (
    <div className={classes.MovieSchedule}>
      <div className={classes.MovieScheduleHeader}>公開予定日</div>
      <div className={classes.MovieScheduleDateGroup}>
        {movieScheduleDateWrapList}
      </div>
    </div>
  );
}

export default MovieSchedule;
