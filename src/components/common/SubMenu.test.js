import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { menuData } from './MenuData';
import SubMenu from './SubMenu';
import SubMenuTab from './SubMenuTab';
import SubMenuContent from './SubMenuContent';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('SubMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search;
    const wrapper = shallow(
      <SubMenu data={data} />
    );

    const subMenuTabNode = wrapper.find(SubMenuTab);
    expect(subMenuTabNode).toHaveLength(1);
    expect(subMenuTabNode.at(0).props().data).toEqual(data.tab);

    const subMenuContentNode = wrapper.find(SubMenuContent);
    expect(subMenuContentNode).toHaveLength(2);
    data.content.forEach(function (content, contentIdx) {
      expect(subMenuContentNode.at(contentIdx).props().data).toEqual(content);
    });
  });
});
