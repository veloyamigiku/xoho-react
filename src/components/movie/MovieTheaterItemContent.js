import classes from './MovieTheaterItemContent.module.css';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';
import axios from 'axios';

const MovieTheaterItemContent = (props, ref) => {

  const movieTheaterItemContentRef = useRef();

  const [dateData, setDateData] = useState([]);
  const [screenData, setScreenData] = useState({});
  const [screenOpen, setScreenOpen] = useState(false);

  useEffect(() => {
    if (screenOpen) {
      movieTheaterItemContentRef.current.style.height = movieTheaterItemContentRef.current.scrollHeight + "px";
    } else {
      movieTheaterItemContentRef.current.style.height = 0;
    }
  }, [screenOpen]);

  useImperativeHandle(ref, () => ({
    getMovieScheduleDateScreen: () => {
      if (screenOpen) {
        setScreenOpen(false);
      } else {
        Promise
          .all([
            axios
              .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=22&title=竜とそばかすの姫'),
            axios
              .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=24')
          ])
          .then(responses => {
            responses.forEach(function (res) {
              if (Array.isArray(res.data)) {
                setDateData(res.data);
              } else if (res.data.year) {
                setScreenData(res.data);
              }
            });
            setScreenOpen(true);
          });
      }
    }
  }));

  return (
    <div
      className={classes.MovieTheaterItemContent}
      ref={movieTheaterItemContentRef}>
      <MovieTheaterScheduleDate
        data={dateData}
        onClick={() => console.log("click MovieTheaterScheduleDate.")} />
      <MovieTheaterScheduleScreen data={screenData} />
    </div>
  );
}

export default forwardRef(MovieTheaterItemContent);
