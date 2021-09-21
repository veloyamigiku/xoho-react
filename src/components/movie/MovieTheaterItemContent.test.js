import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MovieTheaterItemContent from './MovieTheaterItemContent';
import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterItemContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(
      <MovieTheaterItemContent />
    );

    const movieTheaterScheduleDateNode = wrapper.find(MovieTheaterScheduleDate);
    expect(movieTheaterScheduleDateNode).toHaveLength(1);
    expect(movieTheaterScheduleDateNode.at(0).props().data).toEqual([]);

    const movieTheaterScheduleScreenNode = wrapper.find(MovieTheaterScheduleScreen);
    expect(movieTheaterScheduleScreenNode).toHaveLength(1);
    expect(movieTheaterScheduleScreenNode.at(0).props().data).toEqual({});
  });
});
