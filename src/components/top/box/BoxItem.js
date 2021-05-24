import classes from './BoxItem.module.css';

const BoxItem = function(props) {
  return (
    <div className={classes.BoxItem}>
      <div className={classes.BoxItemTitle}>{props.data.title}</div>
      <div className={classes.BoxItemImgWrap}>
        <img className={classes.BoxItemImg} src={props.data.imgUrl} alt="BoxItemImg" />
      </div>
      <div className={classes.BoxItemDesc}>{props.data.desc}</div>
      <div className={classes.BoxItemButton}>
        <a className={classes.BoxItemButtonLink} href={props.data.buttonUrl}>
          <div className={classes.BoxItemButtonLinkLabel}>{props.data.buttonTitle}</div>
        </a>
      </div>
    </div>
  );
}

export default BoxItem;
