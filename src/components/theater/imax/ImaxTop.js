import axios from 'axios';
import { useEffect, useState } from 'react';
import ImaxContent from './ImaxContent';
import ImaxHeader from './ImaxHeader';
import classes from './ImaxTop.module.css';

const ImaxTop = function () {

  const [imaxHeaderData, setImaxHeaderData] = useState(undefined);
  const [imaxContentData, setImaxContentData] = useState(undefined);
  
  useEffect(() => {
    Promise.all(
      [
        axios.get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/imax'),
        axios.get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=6,1&front_type=react')
      ]
    )
    .then(ress => {
      var topData = undefined;
      var theaterData = undefined;
      ress.forEach(res => {
        if (res.data.logo) {
          topData = res.data;
        } else if (Array.isArray(res.data)) {
          theaterData = res.data;
        }
      });
      setImaxHeaderData(topData);
      setImaxContentData({
        topData: topData,
        theaterData: {
          6: theaterData[0],
          1: theaterData[1]
        }
      });
    });
  }, []);

  return (
    <div className={classes.ImaxBody}>
      { imaxHeaderData && <ImaxHeader data={imaxHeaderData} /> } 
      { imaxContentData && <ImaxContent data={imaxContentData} /> }
    </div>
  );

};

export default ImaxTop;
