import classes from './MovieTheaterContent.module.css';
import MovieTheaterArea from './MovieTheaterArea';
import { forwardRef, useImperativeHandle, useState } from 'react';

const MovieTheaterContent = (props, ref) => {

  const [activeAreaTabIdx, setActiveAreaTabIdx] = useState(0);

  useImperativeHandle(ref, () => ({
    switchArea: (activeAreaTabIdx) => {
      setActiveAreaTabIdx(activeAreaTabIdx);
    }
  }));

  var movieTheaterAreaList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movieTheaterArea, movieTheaterAreaIdx) {
      movieTheaterAreaList.push(
        <div
          key={'MovieTheaterArea' + movieTheaterAreaIdx}
          style={activeAreaTabIdx === movieTheaterAreaIdx ? {display: 'block'} : {display: 'none'}}>
          <MovieTheaterArea data={movieTheaterArea.prefectures} />
        </div>
      );
    });
  }
  return (
    <div className={classes.MovieTheaterContent}>
      {movieTheaterAreaList}
    </div>
  );
}

export default forwardRef(MovieTheaterContent);
