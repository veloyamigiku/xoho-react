import classes from './TopBanner.module.css';
import TopBannerItem from './TopBannerItem';

const TopBanner = function(props) {

  var topBannerItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (topBannerItem, topBannerItemIdx) {
      topBannerItemList.push(
        <TopBannerItem
          data={topBannerItem}
          key={'TopBanner' + topBannerItemIdx} />
      );
    });
  }

  return (
    <div className={classes.TopBanner}>
      {topBannerItemList}
    </div>
  );
}

export default TopBanner;
