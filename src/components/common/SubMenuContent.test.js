import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { menuData } from './MenuData';
import SubMenuContent from './SubMenuContent';
import MenuItemA from './MenuItemA';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('SubMenuContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search.content[0];
    const display = 'blocK';
    const wrapper = shallow(
      <SubMenuContent
        data={data}
        display={display} />
    );

    const subMenuContentNode = wrapper.find('div.SubMenuContent');
    expect(subMenuContentNode).toHaveLength(1);
    expect(subMenuContentNode.at(0).props().style.display).toEqual(display);
    const menuItemANodes = wrapper.find(MenuItemA);
    expect(menuItemANodes).toHaveLength(data.length);
    data.forEach(function (menuItem, menuItemIdx) {
      const menuItemANode = menuItemANodes.at(menuItemIdx);
      expect(menuItemANode.props().data).toEqual(menuItem)
    });
  });
});
