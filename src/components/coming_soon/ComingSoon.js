import classes from './ComingSoon.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TopMenu from '../common/TopMenu';
import { comingSoonHeadingData } from './ComingSoonHeadingData';
import Heading from '../common/Heading';
import LargeButtonContainer from '../common/LargeButtonContainer';
import MovieContainer from '../common/MovieContainer';
import MovieSchedule from '../common/MovieSchedule';
import { useRef } from 'react';

const ComingSoon = function() {
  
  const [topMenuData, setTopMenuData] = useState([]);
  const [comingSoonData, setComingSoonData] = useState([]);
  const [comingSoonLargeButtonData, setComingSoonLargeButtonData] = useState([]);

  const movieContainerRef = useRef();

  useEffect(() => {
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=react")
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/coming_soon?front_type=vue")
      .then(res => {
        setComingSoonData(res.data);
      });
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=coming_soon")
      .then(res => {
        setComingSoonLargeButtonData(res.data);
      });
  }, []);

  function scrollToMovieContainerItem(dateIdx) {
    movieContainerRef.current.scrollToMovieContainerItem(dateIdx);
  }

  return (
    <div className={classes.ComingSoon}>
      <TopMenu data={topMenuData} />
      <Heading data={comingSoonHeadingData.CS} />
      <MovieSchedule
        data={comingSoonData}
        tellDateIdxToParent={(dateIdx) => scrollToMovieContainerItem(dateIdx)} />
      <MovieContainer
        data={comingSoonData}
        ref={movieContainerRef} />
      <LargeButtonContainer data={comingSoonLargeButtonData} />
    </div>
  );
}

export default ComingSoon;
