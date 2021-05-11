import classes from './Top.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TopMenu from '../common/TopMenu';

const Top = function() {

  const [topMenuData, setTopMenuData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/top_menu')
      .then(res => {
        setTopMenuData(res.data);
      });
  }, []);

  return (
    <div className={classes.Top}>
      <TopMenu data={topMenuData} />
    </div>
  );
}

export default Top;
