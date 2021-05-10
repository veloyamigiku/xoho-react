import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { menuData } from './MenuData';
import MenuItemA from './MenuItemA';
import MenuItemB from './MenuItemB';
import SubMenu from './SubMenu';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Menuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(<Menu data={menuData} />);

    const menu1ItemNodes = wrapper.find('div.Menu1').find(MenuItemA);
    expect(menu1ItemNodes).toHaveLength(menuData.menu1.length);
    menuData.menu1.forEach(function (menu1Item, menu1ItemIdx) {
      const menu1ItemNode = menu1ItemNodes.at(menu1ItemIdx);
      expect(menu1ItemNode.props().data).toEqual(menu1Item);
    });

    const subMenuNode = wrapper.find(SubMenu);
    expect(subMenuNode).toHaveLength(1);
    expect(subMenuNode.at(0).props().data).toEqual(menuData.search);

    const infoItemNodes = wrapper.find('div.Info').find(MenuItemB);
    expect(infoItemNodes).toHaveLength(menuData.info.length);
    menuData.info.forEach(function (infoItem, infoItemIdx) {
      const infoItemNode = infoItemNodes.at(infoItemIdx);
      expect(infoItemNode.props().data).toEqual(infoItem);
    });
    
    const menu2ItemNodes = wrapper.find('div.Menu2').find(MenuItemA);
    expect(menu2ItemNodes).toHaveLength(menuData.menu2.length);
    menuData.menu2.forEach(function (menu2Item, menu2ItemIdx) {
      const menu2ItemNode = menu2ItemNodes.at(menu2ItemIdx);
      expect(menu2ItemNode.props().data).toEqual(menu2Item);
    });

  });
});
