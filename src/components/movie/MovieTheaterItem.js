import classes from './MovieTheaterItem.module.css';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';
import MovieTheaterItemContent from './MovieTheaterItemContent';
import { useState } from 'react';
import axios from 'axios';

const MovieTheaterItem = (props) => {
  
  const [data, setData] = useState({
    date: [],
    screen: {}
  });

  const clickHeader = () => {
    Promise
      .all([
        axios
          .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=22&title=竜とそばかすの姫'),
        axios
          .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=24')
      ])
      .then(responses => {
        var rs = {};
        responses.forEach(function (res) {
          if (Array.isArray(res.data)) {
            rs.date = res.data;
          } else if (res.data.year) {
            rs.screen = res.data;
          }
        });
        setData(rs);
      });
  };

  return (
    <div className={classes.MovieTheaterItem}>
      <MovieTheaterItemHeader
        data={props.data}
        onClick={() => clickHeader()} />
      <MovieTheaterItemContent data={data} />
    </div>
  );
}

export default MovieTheaterItem;
