import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { topMenu } from './TopMenuData';
import TopMenuItem from './TopMenuItem';


Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TopMenuItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topMenu[0];
    const wrapper = shallow(
      <TopMenuItem
        data={data}
        widthRatio={100 / topMenu.length} />
    );

    const topMenuItemNode = wrapper.find('div.TopMenuItem');
    expect(topMenuItemNode).toHaveLength(1);
    expect(topMenuItemNode.at(0).props().style.width).toEqual(100 / topMenu.length + '%');
    const topMenuItemLinkNode = wrapper.find('a.TopMenuItemLink');
    expect(topMenuItemLinkNode).toHaveLength(1);
    expect(topMenuItemLinkNode.at(0).props().href).toEqual(data.url);
    const topMenuItemTitleNode = topMenuItemLinkNode.at(0).find('div.TopMenuItemTitle');
    expect(topMenuItemTitleNode).toHaveLength(1);
    expect(topMenuItemTitleNode.at(0).text()).toEqual(data.title);
    const topMenuItemSubNode = topMenuItemLinkNode.at(0).find('div.TopMenuItemSub');
    expect(topMenuItemSubNode).toHaveLength(1);
    expect(topMenuItemSubNode.at(0).text()).toEqual(data.sub);
  });
});
