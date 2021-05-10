import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItemA from './MenuItemA';
import { menuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MenuItemAコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.menu1[0];
    const wrapper = shallow(
      <MenuItemA data={data} />
    );
    
    const menuItemALinkNode = wrapper.find('div.MenuItemA a.MenuItemALink');
    expect(menuItemALinkNode).toHaveLength(1);
    expect(menuItemALinkNode.at(0).text()).toContain(data.label);
    expect(menuItemALinkNode.at(0).props().href).toEqual(data.url);
    const menuItemAIconNode = menuItemALinkNode.at(0).find(FontAwesomeIcon);
    expect(menuItemAIconNode).toHaveLength(1);
    expect(menuItemAIconNode.at(0).props().icon).toEqual(data.icon);
  });
});
