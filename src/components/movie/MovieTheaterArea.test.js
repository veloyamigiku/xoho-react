import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterArea from './MovieTheaterArea';
import MovieTheaterPrefecture from './MovieTheaterPrefecture';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterAreaコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures;
    const wrapper = shallow(
      <MovieTheaterArea data={data} />
    );

    const movieTheaterPrefectureNodes = wrapper.find(MovieTheaterPrefecture);
    expect(movieTheaterPrefectureNodes).toHaveLength(data.length);
    data.forEach(function (movieTheaterPrefecture, movieTheaterPrefectureIdx) {
      const movieTheaterPrefectureNode = movieTheaterPrefectureNodes.at(movieTheaterPrefectureIdx);
      expect(movieTheaterPrefectureNode.props().data).toEqual(movieTheaterPrefecture);
    });
  });
});
