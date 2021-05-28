import React from 'react';
import classes from './RankingItem.module.css';

//const RankingItem = React.forwardRef((props, ref) => {
const RankingItem = function(props) {

  return (
    <div className={classes.RankingItem}>
      <a
        className="RankingItemLink"
        href={props.data.url}>
        <div>
          <div>
            <img
              className={classes.RankingItemImg}
              src={props.data.imgUrl}
              alt="RankingItemImg" />
          </div>
          <div>
            <div className="RankingItemTitle">{props.data.title}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
//});

export default RankingItem;
