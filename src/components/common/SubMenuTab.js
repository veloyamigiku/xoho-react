import classes from './SubMenuTab.module.css';
import SubMenuTabItem from './SubMenuTabItem';

const SubMenuTab = function (props) {

  var subMenuTabItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (subMenuTabItem, subMenuTabItemIdx) {
      subMenuTabItemList.push(
        <SubMenuTabItem
          key={'SubMenuTabItem' + subMenuTabItemIdx}
          data={subMenuTabItem}
          active={props.activeIdx === subMenuTabItemIdx}
          click={() => props.click(subMenuTabItemIdx)} />
      );
    });
  }

  return (
    <div className={classes.SubMenuTab}>
      {subMenuTabItemList}
    </div>
  );
}

export default SubMenuTab;
