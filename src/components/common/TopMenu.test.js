import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TopMenu from './TopMenu';
import TopMenuItem from './TopMenuItem';
import { topMenu } from './TopMenuData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TopMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(
      <TopMenu data={topMenu} />
    );

    const topMenuItemNodes = wrapper.find(TopMenuItem);
    expect(topMenuItemNodes).toHaveLength(topMenu.length);
    topMenu.forEach(function (topMenuItem, topMenuItemIdx) {
      const topMenuItemNode = topMenuItemNodes.at(topMenuItemIdx);
      expect(topMenuItemNode.props().data).toEqual(topMenuItem);
      expect(topMenuItemNode.props().widthRatio).toEqual(100 / topMenu.length);
    });
  });
});
