import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { nowPlayingLargeButton } from '../now_playing/NowPlayingLargeButtonData';
import LargeButton from './LargeButton';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('LargeButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlayingLargeButton[0];
    const wrapper = shallow(<LargeButton data={data} />);

    const largeButtonLinkNode = wrapper.find('a.LargeButtonLink');
    expect(largeButtonLinkNode).toHaveLength(1);
    expect(largeButtonLinkNode.at(0).props().href).toEqual(data.url);
    expect(largeButtonLinkNode.at(0).text()).toEqual(data.title);

  });
});
