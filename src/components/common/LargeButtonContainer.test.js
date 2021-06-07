import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { nowPlayingLargeButton } from '../now_playing/NowPlayingLargeButtonData';
import LargeButton from './LargeButton';
import LargeButtonContainer from './LargeButtonContainer';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('LargeButtonContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlayingLargeButton;
    const wrapper = shallow(<LargeButtonContainer data={data} />);

    const largeButtonNodes = wrapper.find(LargeButton);
    expect(largeButtonNodes).toHaveLength(data.length);
    data.forEach(function (largeButton, largeButtonIdx) {
      const largeButtonNode = largeButtonNodes.at(largeButtonIdx);
      expect(largeButtonNode.props().data).toEqual(largeButton);
    });

  });
});
