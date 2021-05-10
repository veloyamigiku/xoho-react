import { library } from '@fortawesome/fontawesome-svg-core';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { menuData } from './MenuData';
import SubMenuTab from './SubMenuTab';
import SubMenuTabItem from './SubMenuTabItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('SubMenuTabコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search.tab;
    const wrapper = shallow(
      <SubMenuTab
        data={data}
        activeIdx={1} />
    );

    const subMenuTabItemNodes = wrapper.find(SubMenuTabItem);
    expect(subMenuTabItemNodes).toHaveLength(data.length);
    data.forEach(function (subMenuTabItem, subMenuTabItemIdx) {
      const subMenuTabItemNode = subMenuTabItemNodes.at(subMenuTabItemIdx);
      expect(subMenuTabItemNode.props().data).toEqual(subMenuTabItem);
      if (subMenuTabItemIdx === 1) {
        expect(subMenuTabItemNode.props().active).toEqual(true);
      } else {
        expect(subMenuTabItemNode.props().active).toEqual(false);
      }
    });
    
  });
});
