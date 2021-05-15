import classes from './Top.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TopMenu from '../common/TopMenu';
import LoginMenu from './login_menu/LoginMenu';
import TopBanner from './top_banner/TopBanner';

const Top = function() {

  const [topMenuData, setTopMenuData] = useState([]);
  const [loginMenuData, setLoginMenuData] = useState({});
  const [topBannerData, setTopBannerData] = useState([]);

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu')
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu')
      .then(res => {
        setLoginMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner')
      .then(res => {
        setTopBannerData(res.data);
      });
  }, []);

  return (
    <div className={classes.Top}>
      <TopMenu data={topMenuData} />
      <LoginMenu data={loginMenuData} />
      <TopBanner data={topBannerData} />
    </div>
  );
}

export default Top;
