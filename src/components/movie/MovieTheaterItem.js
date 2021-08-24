import classes from './MovieTheaterItem.module.css';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';
import MovieTheaterItemContent from './MovieTheaterItemContent';
import { useState } from 'react';
import axios from 'axios';

const MovieTheaterItem = (props) => {
  
  const [dateData, setDateData] = useState([]);
  const [screenData, setScreenData] = useState({});

  const clickHeader = () => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=22&title=竜とそばかすの姫')
      .then(res => {
        setScreenData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=24')
      .then(res => {
        setDateData(res.data);
      });
  };

  return (
    <div className={classes.MovieTheaterItem}>
      <MovieTheaterItemHeader
        data={props.data}
        onClick={() => clickHeader()} />
      <MovieTheaterItemContent
        dateData={dateData}
        screenData={screenData} />
    </div>
  );
}

export default MovieTheaterItem;
