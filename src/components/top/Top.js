import classes from './Top.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TopMenu from '../common/TopMenu';
import LoginMenu from './login_menu/LoginMenu';
import TopBanner from './top_banner/TopBanner';
import Heading from '../common/Heading';
import { topHeadingData } from './TopHeadingData';
import Information from './information/Information';
import ImportantInformation from './important_information/ImportantInformation';
import Box from './box/Box';
import Service from './service/Service';
import Ranking from './ranking/Ranking';

const Top = function() {

  const [topMenuData, setTopMenuData] = useState([]);
  const [loginMenuData, setLoginMenuData] = useState({});
  const [topBannerData, setTopBannerData] = useState([]);
  const [rankingData, setRankingData] = useState([]);
  const [informationData, setInformationData] = useState([]);
  const [importantInformationData, setImportantInformationData] = useState([]);
  const [boxData, setBoxData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=react')
      .then(res => {
        setTopMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu?front_type=react')
      .then(res => {
        setLoginMenuData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner?front_type=react')
      .then(res => {
        setTopBannerData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/ranking?front_type=react')
      .then(res => {
        setRankingData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information?front_type=react')
      .then(res => {
        setInformationData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/important_information?front_type=react')
      .then(res => {
        setImportantInformationData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/box?front_type=react')
      .then(res => {
        setBoxData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/service?front_type=react')
      .then(res => {
        setServiceData(res.data);
      });
  }, []);

  return (
    <div className={classes.Top}>
      <TopMenu data={topMenuData} />
      
      <LoginMenu data={loginMenuData} />
      
      <TopBanner data={topBannerData} />
      
      <Heading data={topHeadingData['R']} />
      <Ranking data={rankingData} />
      
      <Heading data={topHeadingData['I']} />
      <Information data={informationData} />
      
      <Heading data={topHeadingData['II']} />
      <ImportantInformation data={importantInformationData} />
      <Box data={boxData} />
      
      <Heading data={topHeadingData['S']} />
      <Service data={serviceData} />
    </div>
  );
}

export default Top;
