import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

import classes from "./NowPlaying.module.css";
import TopMenu from "../common/TopMenu";
import Heading from "../common/Heading";
import LargeButtonContainer from "../common/LargeButtonContainer";
import { nowPlayingHeadingData } from "./NowPlayingHeadingData";

const NowPlaying = function() {

  const [topMenuData, setTopMenuData] = useState([]);
  const [nowPlayingLargeButtonData, setNowPlayingLargeButtonData] = useState([]);
  
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
      })
  }, []);

  return (
    <div className={classes.NowPlaying}>
      
      <TopMenu data={topMenuData} />

      <Heading data={nowPlayingHeadingData.NP} />

      <LargeButtonContainer data={nowPlayingLargeButtonData} />

    </div>
  );
}

export default NowPlaying;
