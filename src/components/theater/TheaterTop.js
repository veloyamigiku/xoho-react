import classes from './TheaterTop.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TopMenu from '../common/TopMenu';
import Heading from '../common/Heading';
import { headingData } from './HeadingData';
import LargeButtonContainer from '../common/LargeButtonContainer';
import TheaterHeading from './TheaterHeading';
import { theaterHeadingData } from './TheaterHeadingData';
import TheaterContainer from './TheaterContainer';

const TheaterTop = function() {

  const [topMenuData, setTopMenuData] = useState([]);
  const [largeButtonData, setLargeButtonData] = useState([]);
  const [allTheaterData, setAllTheaterData] = useState([]);
  const [allTypeTheaterData, setAllTypeTheaterData] = useState([]);

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=react')
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=theater')
      .then(res => {
        setLargeButtonData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=all&front_type=react')
      .then(res => {
        setAllTheaterData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=all_type&front_type=react')
      .then(res => {
        setAllTypeTheaterData(res.data);
      });
  }, []);

  return (
    <div className={classes.TheaterTop}>
      <TopMenu data={topMenuData} />
      <Heading data={headingData.NH} />
      <Heading data={headingData.PBTT} />
      <TheaterHeading data={theaterHeadingData.TL} />
      <TheaterContainer data={allTheaterData} />
      <TheaterHeading data={theaterHeadingData.FBTL} />
      <TheaterContainer data={allTypeTheaterData} />
      <div className={classes.TheaterInfo}>全劇場のお問い合わせ電話番号一覧は<a href=".">こちら</a></div>
      <LargeButtonContainer data={largeButtonData} />
    </div>
  );

}

export default TheaterTop;
