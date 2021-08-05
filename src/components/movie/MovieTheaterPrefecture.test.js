import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterPrefecture from './MovieTheaterPrefecture';
import MovieTheaterItem from './MovieTheaterItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterPrefectureコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures[0];
    const wrapper = shallow(
      <MovieTheaterPrefecture data={data} />
    );

    const movieTheaterItemNodes = wrapper.find(MovieTheaterItem);
    expect(movieTheaterItemNodes).toHaveLength(data.theater.length);
    data.theater.forEach(function (movieTheater, movieTheaterIdx) {
      const movieTheaterItemNode = movieTheaterItemNodes.at(movieTheaterIdx);
      if (movieTheaterIdx == 0) {
        movieTheater.pref = data.prefecture.name;
      }
      expect(movieTheaterItemNode.props().data).toEqual(movieTheater);
    });
  });
});
