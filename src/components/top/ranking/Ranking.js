import React, { useRef } from 'react';
import classes from './Ranking.module.css';
import RankingItem from './RankingItem';

const Ranking = function(props) {
  const scrollSnapAlignElList = useRef([]);
  const scrollSnapAlignElCurIdx = useRef(0);
  var rankingItemList = [];
  if (props.data && props.data.length > 0) {
    var scrollSnapAlignElIdx = 0;
    props.data.forEach(function (rankingItem, rankingItemIdx) {
      if (rankingItemIdx % 3 === 0) {
        scrollSnapAlignElList.current[scrollSnapAlignElIdx] = React.createRef();
        rankingItemList.push(
          <div
            className={classes.RankingItemWrap}
            ref={scrollSnapAlignElList.current[scrollSnapAlignElIdx]}
            key={'RankingItemWrap' + rankingItemIdx}>
            <RankingItem data={rankingItem}/>
          </div>
        );
        scrollSnapAlignElIdx++;
      } else {
        rankingItemList.push(
          <div
            className={classes.RankingItemWrap}
            key={'RankingItemWrap' + rankingItemIdx}>
            <RankingItem data={rankingItem} />
          </div>
        );
      }
    });
  }

  const handleBtnClick = (inc) => {
    //console.log(scrollSnapAlignElList.current.length);
    //console.log(scrollSnapAlignElList.current[0]);
    console.log(scrollSnapAlignElCurIdx.current)
    scrollSnapAlignElCurIdx.current += inc;
    console.log(scrollSnapAlignElCurIdx.current)
    //console.log(scrollSnapAlignElList.current);
    console.log(scrollSnapAlignElList.current[scrollSnapAlignElCurIdx.current].current);
    scrollSnapAlignElList.current[scrollSnapAlignElCurIdx.current].current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={classes.RankingWrap}>
      <div
        className={classes.RankingPrevBtn}
        onClick={() => handleBtnClick(-1)} />
      <div className={classes.Ranking}>
        {rankingItemList}
      </div>
      <div
        className={classes.RankingNextBtn}
        onClick={() => handleBtnClick(1)} />
    </div>
  );

}

export default Ranking;
