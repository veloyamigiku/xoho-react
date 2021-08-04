import classes from './MovieTop.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieSummary from './MovieSummary';
import Heading from '../common/Heading';
import { headingData } from './HeadingData';
import MovieHeading from './MovieHeading';
import { movieHeadingData } from './MovieHeadingData';
import LargeButtonContainer from '../common/LargeButtonContainer';
import MovieTheater from './MovieTheater';

const MovieTop = () => {

  const [movieData, setMovieData] = useState({});
  const [movieLargeButtonData, setMovieLargeButtonData] = useState({});

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info')
      .then(res => {
        setMovieData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=movie')
      .then(res => {
        setMovieLargeButtonData(res.data);
      });
  }, []);

  return (
    <div className={classes.MovieTop}>
      <MovieSummary data={movieData} />
      <MovieHeading data={movieHeadingData.NPS} />
      <Heading data={headingData.NH} />
      <Heading data={headingData.PBTT} />
      <Heading data={headingData.TLIS} />
      <MovieTheater data={movieData.theater} />
      <LargeButtonContainer data={movieLargeButtonData} />
    </div>
  );

}

export default MovieTop;
