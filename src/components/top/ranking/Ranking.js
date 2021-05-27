import classes from './Ranking.module.css';
import RankingItem from './RankingItem';

const Ranking = function(props) {

  var rankingItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (rankingItem, rankingItemIdx) {
      rankingItemList.push(
        <RankingItem
          data={rankingItem}
          key={'RankingItem' + rankingItemIdx} />
      );
    });
  }

  return (
    <div className={classes.RankingWrap}>
      <div className={classes.RankingPrevBtn}></div>
      <div className={classes.Ranking}>
        {rankingItemList}
      </div>
      <div className={classes.RankingNextBtn}></div>
    </div>
  );

}

export default Ranking;
