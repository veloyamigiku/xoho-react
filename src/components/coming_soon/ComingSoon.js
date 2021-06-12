import classes from './ComingSoon.module.css';
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development"
import TopMenu from "../common/TopMenu"

const ComingSoon = function() {
  
  const [topMenuData, setTopMenuData] = useState([]);

  useEffect(() => {
    axios
      .get("https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=react")
      .then(res => {
        setTopMenuData(res.data);
      });
  }, []);

  return (
    <div className={classes.ComingSoon}>
      <TopMenu data={topMenuData} />
    </div>
  );
}

export default ComingSoon;
