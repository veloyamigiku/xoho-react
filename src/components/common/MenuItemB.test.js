import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import MenuItemB from './MenuItemB';
import { menuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MenuItemBコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.info[0];
    const wrapper = shallow(
      <MenuItemB data={data} />
    );

    const menuItemBLinkNodes = wrapper.find('div.MenuItemB a.MenuItemBLink');
    expect(menuItemBLinkNodes).toHaveLength(1);
    const menuItemBLinkNode = menuItemBLinkNodes.at(0);
    expect(menuItemBLinkNode.at(0).props().href).toEqual(data.url);
    const menuItemBLabelNode = menuItemBLinkNode.find('div.MenuItemBLabel');
    expect(menuItemBLabelNode).toHaveLength(1);
    expect(menuItemBLabelNode.at(0).props().dangerouslySetInnerHTML.__html).toEqual(data.label);
    const menuItemBIconNode = menuItemBLinkNode.find(FontAwesomeIcon);
    expect(menuItemBIconNode).toHaveLength(1);
    expect(menuItemBIconNode.props().icon).toEqual(data.icon); 
  });
});
