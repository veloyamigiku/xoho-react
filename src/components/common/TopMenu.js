import classes from './TopMenu.module.css';
import TopMenuItem from './TopMenuItem';

const TopMenu = function(props) {

  var topMenuItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (topMenuItem, topMenuItemIdx) {
      topMenuItemList.push(
        <TopMenuItem
          data={topMenuItem}
          key={topMenuItemIdx}
          widthRatio={100 / props.data.length} />
      );
    });
  }
  
  return (
    <div className={classes.TopMenu}>
      {topMenuItemList}
    </div>
  );
}

export default TopMenu;
