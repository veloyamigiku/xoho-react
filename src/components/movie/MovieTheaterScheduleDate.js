import classes from './MovieTheaterScheduleDate.module.css';

const MovieTheaterScheduleDate = (props) => {

  var scheduleDateList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (scheduleDate, scheduleDateIdx) {
      scheduleDateList.push(
        <div
          className={classes.MovieTheaterScheduleDate}
          key={'MovieTheaterScheduleDate' + scheduleDateIdx}>
          <div className={classes.MovieTheaterScheduleDateTitle}>
            {scheduleDate.month + "/"}
            <span className={classes.MovieTheaterScheduleDateTitleDay}>{scheduleDate.day}</span>
            {"(" + scheduleDate.d + ")"}
          </div>
          <div className={classes.MovieTheaterScheduleDateOptionWrap}>
            <div className={classes.MovieTheaterScheduleDateOption}>{scheduleDate.option}</div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className={classes.MovieTheaterScheduleDateGroup}>
        {scheduleDateList}
      </div>
    </div>
  );
}

export default MovieTheaterScheduleDate;
