import classes from './Menu.module.css';
import MenuItemA from './MenuItemA';
import MenuItemB from './MenuItemB';
import SubMenu from './SubMenu'

const Menu = function(props) {

  var menu1ItemList = [];
  props.data.menu1 && props.data.menu1.forEach(function (menuItem, menuItemIdx) {
    menu1ItemList.push(
      <MenuItemA data={menuItem} key={'Menu1Item' + menuItemIdx} />
    );
  });

  var searchData = [];
  if (props.data.search) {
    searchData = props.data.search;
  }

  var infoItemList = [];
  props.data.info && props.data.info.forEach(function (infoItem, infoItemIdx) {
    infoItemList.push(
      <MenuItemB data={infoItem} key={'InfoItem' + infoItemIdx} />
    );
  })
  
  var menu2ItemList = [];
  props.data.menu2 && props.data.menu2.forEach(function (menuItem, menuItemIdx) {
    menu2ItemList.push(
      <MenuItemA data={menuItem} key={'Menu2Item' + menuItemIdx} />
    );
  });
  
  return (
    <div className="Menu">
      <div className="Menu1">
        {menu1ItemList}
      </div>
      <SubMenu data={searchData} />
      <div className={classes.Info}>
        {infoItemList}
      </div>
      <div className="Menu2">
        {menu2ItemList}
      </div>
    </div>
  );
}

export default Menu;
