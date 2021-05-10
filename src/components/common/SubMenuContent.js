import MenuItemA from './MenuItemA';

const SubMenuContent = function(props) {

  var menuItemAList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (menuItem, menuItemIdx) {
      menuItemAList.push(
        <MenuItemA
          key={'SubMenuContentItem' + menuItemIdx}
          data={menuItem} />
      );
    });
  }

  return (
    <div className="SubMenuContent" style={{display: props.display}}>
      {menuItemAList}
    </div>
  );
}

export default SubMenuContent;
