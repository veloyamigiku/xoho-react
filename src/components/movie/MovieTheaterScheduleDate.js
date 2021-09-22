import { useState } from 'react';
import classes from './MovieTheaterScheduleDate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieTheaterScheduleDate = (props) => {

  const [activeDateIdx, setActiveDateIdx] = useState(0);

  const onClickDate = (clickDateIdx) => {
    setActiveDateIdx(clickDateIdx);
    props.onClick();
  }

  var scheduleDateList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (scheduleDate, scheduleDateIdx) {
      scheduleDateList.push(
        <div
          className={activeDateIdx === scheduleDateIdx ? classes.MovieTheaterScheduleDateActive : classes.MovieTheaterScheduleDate}
          key={'MovieTheaterScheduleDate' + scheduleDateIdx}
          onClick={() => onClickDate(scheduleDateIdx)}>
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
    <div className={classes.MovieScheduleDateRoot}>
      <div className={classes.MovieScheduleDatePrev}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </div>
      <div className={classes.MovieTheaterScheduleDateGroup}>
        {scheduleDateList}
      </div>
      <div className={classes.MovieScheduleDateNext}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </div>
    </div>
  );
}

export default MovieTheaterScheduleDate;
