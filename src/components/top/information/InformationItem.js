import classes from './InformationItem.module.css';

const InformationItem = function (props) {
  return (
    <div className={classes.InformationItemWrap}>
      <div className={classes.InformationItem}>
        <div className={classes.InformationItemImgWrap}>
          <img className={classes.InformationItemImg} src={props.data.imgUrl} alt="InformationItemImg" />
        </div>
        <div
          className={classes.InformationItemType}
          style={{
            color: props.data.typeColor,
            backgroundColor: props.data.typeBackColor
            }}>
          {props.data.type}
        </div>
        <div
          className={classes.InformationItemContent}
          dangerouslySetInnerHTML={{__html: props.data.title}}></div>
      </div>
    </div>
  );
}

export default InformationItem;
