import classes from './ComingSoon.module.css';
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development"
import TopMenu from "../common/TopMenu"
import { comingSoonHeadingData } from './ComingSoonHeadingData';
import Heading from '../common/Heading';
import LargeButtonContainer from '../common/LargeButtonContainer';

const ComingSoon = function() {
  
  const [topMenuData, setTopMenuData] = useState([]);
  const [comingSoonLargeButtonData, setComingSoonLargeButtonData] = useState([]);

  useEffect(() => {
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=react")
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=coming_soon")
      .then(res => {
        setComingSoonLargeButtonData(res.data);
      });
  }, []);

  return (
    <div className={classes.ComingSoon}>
      <TopMenu data={topMenuData} />
      <Heading data={comingSoonHeadingData.CS} />
      <LargeButtonContainer data={comingSoonLargeButtonData} />
    </div>
  );
}

export default ComingSoon;
