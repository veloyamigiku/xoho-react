import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterItem from './MovieTheaterItem';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItem data={data} />
    );

    const movieTheaterItemHeaderNode = wrapper.find(MovieTheaterItemHeader);
    expect(movieTheaterItemHeaderNode).toHaveLength(1);
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(data);
  });
});
