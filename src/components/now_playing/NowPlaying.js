import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

import classes from "./NowPlaying.module.css";
import TopMenu from "../common/TopMenu";
import Heading from "../common/Heading";
import LargeButtonContainer from "../common/LargeButtonContainer";
import { nowPlayingHeadingData } from "./NowPlayingHeadingData";
import MovieContainer from "../common/MovieContainer";

const NowPlaying = function() {

  const [topMenuData, setTopMenuData] = useState([]);
  const [nowPlayingLargeButtonData, setNowPlayingLargeButtonData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=react')
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=now_playing')
      .then(res => {
        setNowPlayingLargeButtonData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/now_playing?front_type=react')
      .then(res => {
        setNowPlayingData(res.data);
      });
  }, []);

  return (
    <div className={classes.NowPlaying}>
      
      <TopMenu data={topMenuData} />

      <Heading data={nowPlayingHeadingData.NP} />

      <MovieContainer data={nowPlayingData} />

      <LargeButtonContainer data={nowPlayingLargeButtonData} />

    </div>
  );
}

export default NowPlaying;
