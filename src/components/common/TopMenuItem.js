import classes from './TopMenuItem.module.css';

const TopMenuItem = function(props) {
  return (
    <div className={classes.TopMenuItem} style={{width: props.widthRatio + '%'}}>
      <a className={classes.TopMenuItemLink} href={props.data.url}>
        <div className={classes.TopMenuItemContent}>
          <div className={classes.TopMenuItemTitle}>{props.data.title}</div>
          <div className={classes.TopMenuItemSub}>{props.data.sub}</div>
        </div>
      </a>
    </div>
  );
}

export default TopMenuItem;
