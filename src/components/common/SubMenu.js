import { useState } from 'react';
import SubMenuContent from './SubMenuContent';
import SubMenuTab from './SubMenuTab';

const SubMenu = function (props) {
  
  const [activeIdx, setActiveIdx] = useState(0);

  function clickTab (tabIdx) {
    setActiveIdx(tabIdx);
  }

  var subMenuContentList = [];
  if (props.data.content && props.data.content.length > 0) {
    props.data.content.forEach(function (content, contentIdx) {
      subMenuContentList.push(
        <SubMenuContent
          key={'SubMenuContent' + contentIdx}
          data={content}
          display={activeIdx === contentIdx ? 'block' : 'none'} />
      );
    });
  }
  return (
    <div className="SubMenu">
      <SubMenuTab
        data={props.data.tab}
        activeIdx={activeIdx}
        click={(tabIdx) => clickTab(tabIdx)} />
      <div className="SubMenuContentWrapper">
        {subMenuContentList}
      </div>
    </div>
  );
}

export default SubMenu;
