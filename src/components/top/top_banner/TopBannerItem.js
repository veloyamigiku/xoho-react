import classes from './TopBannerItem.module.css';

const TopBannerItem = function(props) {
  return (
    <div className={classes.TopBannerItem}>
      <a className="TopBannerItemLink" href={props.data.url}>
        <img
          className={classes.TopBannerItemImg}
          src={props.data.imgUrl}
          alt="TopBannerItemImg" />
      </a>
    </div>
  );
}

export default TopBannerItem;
