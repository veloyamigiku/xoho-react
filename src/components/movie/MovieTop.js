import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieSummary from './MovieSummary';

const MovieTop = () => {

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info')
      .then(res => {
        setMovieData(res.data);
      });
  }, []);

  return (
    <div>
      <MovieSummary data={movieData} />
    </div>
  );

}

export default MovieTop;
