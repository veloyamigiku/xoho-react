import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterContent from './MovieTheaterContent';
import MovieTheaterArea from './MovieTheaterArea';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterContentコンポーネント', () => {

  it('プロップスのテスト', () => {
    const data = movieData.theater;
    const wrapper = shallow(
      <MovieTheaterContent data={data} />
    );

    const movieTheaterAreaNodes = wrapper.find(MovieTheaterArea);
    expect(movieTheaterAreaNodes).toHaveLength(data.length);
    data.forEach(function (movieTheaterArea, movieTheaterAreaIdx) {
      const movieTheaterAreaNode = movieTheaterAreaNodes.at(movieTheaterAreaIdx);
      expect(movieTheaterAreaNode.props().data).toEqual(movieTheaterArea.prefectures);
    });
  });

});
