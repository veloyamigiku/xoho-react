import classes from './TopMenuItem.module.css';

const TopMenuItem = function(props) {

  const topMenuItemStyle = {
    width: props.widthRatio + '%',
    borderBottom: props.data.active === 1 ? "4px solid #b71c1c" : "4px solid #bdbdbd"
  }
  const topMenuItemLinkStyle = {
    color: props.data.active === 1 ? "#b71c1c" : "#424242"
  };

  return (
    <div
      className={classes.TopMenuItem}
      style={topMenuItemStyle}>
      <a
        className={classes.TopMenuItemLink}
        href={props.data.url}
        style={topMenuItemLinkStyle}>
        <div className={classes.TopMenuItemContent}>
          <div className={classes.TopMenuItemTitle}>{props.data.title}</div>
          <div className={classes.TopMenuItemSub}>{props.data.sub}</div>
        </div>
      </a>
    </div>
  );
}

export default TopMenuItem;
