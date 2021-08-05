import { useState } from 'react';
import classes from './MovieTheaterTab.module.css';

const MovieTheaterTab = (props) => {

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const clickTab = (tabIdx) => {
    setActiveTabIdx(tabIdx);
  }

  var movieTheaterTabItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      const movieTheaterTabClass = activeTabIdx === theaterByAreaPrefectureIdx ?
        classes.MovieTheaterTabItemActive : classes.MovieTheaterTabItem;
      movieTheaterTabItemList.push(
        <div
          className={movieTheaterTabClass}
          key={'MovieTheaterTabItem' + theaterByAreaPrefectureIdx}
          onClick={() => clickTab(theaterByAreaPrefectureIdx)}>
          {theaterByAreaPrefecture.area.name}
        </div>
      );
    });
  }

  return (
    <div className={classes.MovieTheaterTab}>
      {movieTheaterTabItemList}
    </div>
  );

}

export default MovieTheaterTab;
