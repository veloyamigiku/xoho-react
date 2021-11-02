import { useState, useRef } from 'react';
import { createRef } from 'react';
import classes from './MovieTheaterScheduleDate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieTheaterScheduleDate = (props) => {

  const [activeDateIdx, setActiveDateIdx] = useState(0);

  const scheduleDateGroupContentRef = useRef();

  const scheduleDateGroupRef = useRef();

  const scheduleDateRefList = useRef([]);

  const onClickDate = (clickDateIdx) => {
    setActiveDateIdx(clickDateIdx);
    props.onClick(clickDateIdx);
  }

  const onClickPrev = () => {
    console.log("prev.");
    _calcSlideSize(scheduleDateRefList.current[0].current.clientWidth * 2 * 1);
  }

  const onClickNext = () => {
    console.log("next.");
    _calcSlideSize(scheduleDateRefList.current[0].current.clientWidth * 2 * -1);
  }

  const _calcSlideSize = (slideSize) => {
    const slideRangeMin = scheduleDateGroupRef.current.clientWidth - scheduleDateGroupContentRef.current.clientWidth;
    const slideRangeMax = 0;
    const curMarginLeft = scheduleDateGroupContentRef.current.style.marginLeft ? parseInt(scheduleDateGroupContentRef.current.style.marginLeft) : 0;
    var marginLeft = null;
    if ((curMarginLeft + slideSize) < slideRangeMin) {
      marginLeft = slideRangeMin;
    } else if ((curMarginLeft + slideSize) > slideRangeMax) {
      marginLeft = slideRangeMax;
    } else {
      marginLeft = curMarginLeft + slideSize;
    }
    scheduleDateGroupContentRef.current.style.marginLeft = marginLeft + 'px';
  }

  var scheduleDateList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (scheduleDate, scheduleDateIdx) {
      scheduleDateRefList.current.push(createRef());
      scheduleDateList.push(
        <div
          className={activeDateIdx === scheduleDateIdx ? classes.MovieTheaterScheduleDateActive : classes.MovieTheaterScheduleDate}
          key={'MovieTheaterScheduleDate' + scheduleDateIdx}
          onClick={() => onClickDate(scheduleDateIdx)}
          ref={scheduleDateRefList.current[scheduleDateIdx]}>
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
      <div
        className={classes.MovieScheduleDatePrev}
        onClick={() => {onClickPrev()}}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </div>
      <div
        className={classes.MovieTheaterScheduleDateGroup}
        ref={scheduleDateGroupRef}>
        <div
          className={classes.MovieTheaterScheduleDateGroupContent}
          ref={scheduleDateGroupContentRef}>
          {scheduleDateList}
        </div>
      </div>
      <div
        className={classes.MovieScheduleDateNext}
        onClick={() => {onClickNext()}}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </div>
    </div>
  );
}

export default MovieTheaterScheduleDate;
