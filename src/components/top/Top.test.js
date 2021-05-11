import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Top from './Top';
import TopMenu from '../common/TopMenu';
import { topMenu } from '../common/TopMenuData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Topコンポーネント', () => {
  it('レンダリングのテスト', () => {
    const wrapper = shallow(
      <Top />
    );

    const topMenuNode = wrapper.find(TopMenu);
    expect(topMenuNode).toHaveLength(1);
  });
});
