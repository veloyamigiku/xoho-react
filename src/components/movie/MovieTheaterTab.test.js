import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterTab from './MovieTheaterTab';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterTabコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater;
    const wrapper = shallow(
      <MovieTheaterTab data={data} />
    );

    const movieTheaterTabItemNodes = wrapper.find('div.MovieTheaterTabItem');
    expect(movieTheaterTabItemNodes).toHaveLength(data.length);
    data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      const movieTheaterTabItemNode = movieTheaterTabItemNodes.at(theaterByAreaPrefectureIdx);
      expect(movieTheaterTabItemNode.text()).toEqual(theaterByAreaPrefecture.area.name);
    });
  })
})