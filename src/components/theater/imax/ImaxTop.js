import axios from 'axios';
import { useEffect, useState } from 'react';
import ImaxHeader from './ImaxHeader';
import classes from './ImaxTop.module.css';

const ImaxTop = function () {

  const [imaxTopData, setImaxTopData] = useState({});

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/imax')
      .then(res => {
        setImaxTopData(res.data);
      });
  }, []);

  return (
    <div className={classes.ImaxBody}>
      <ImaxHeader data={imaxTopData} /> 
    </div>
  );

};

export default ImaxTop;
