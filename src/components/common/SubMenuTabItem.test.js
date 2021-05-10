import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import SubMenuTabItem from './SubMenuTabItem';
import { menuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('SubMenuTabItemコンポーネント', () => {
  it('イベントのテスト', () => {
    const data = menuData.search.tab[0];
    const clickMock = jest.fn();
    const wrapper = shallow(
      <SubMenuTabItem
        data={data}
        active={false}
        click={clickMock} />
    );

    const subMenuTabItemNode = wrapper.find('div.SubMenuTabItem');
    expect(subMenuTabItemNode).toHaveLength(1);
    subMenuTabItemNode.at(0).simulate('click');
    expect(clickMock.mock.calls).toHaveLength(1);
  });

  it('プロップスのテスト', () => {
    const data = menuData.search.tab[0];
    const wrapper = shallow(
      <SubMenuTabItem
        data={data}
        active={true} />);

    const subMenuTabItemNode = wrapper.find('div.SubMenuTabItem');
    expect(subMenuTabItemNode).toHaveLength(1);
    expect(subMenuTabItemNode.at(0).props()['data-active']).toEqual(1);
    const subMenuTabItemLabelNode = wrapper.find('div.SubMenuTabItemLabel');
    expect(subMenuTabItemLabelNode).toHaveLength(1);
    expect(subMenuTabItemLabelNode.at(0).props().dangerouslySetInnerHTML.__html).toEqual(data.label);
    const subMenuTabItemIconNode = wrapper.find(FontAwesomeIcon);
    expect(subMenuTabItemIconNode).toHaveLength(1);
    expect(subMenuTabItemIconNode.at(0).props().icon).toEqual(data.icon);
  });
});
