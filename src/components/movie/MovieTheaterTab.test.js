import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterTab from './MovieTheaterTab';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterTabコンポーネント', () => {
  it('イベントのテスト', () => {
    const movieTheaterTabItemClass = 'MovieTheaterTabItem';
    const movieTheaterTabItemActiveClass = 'MovieTheaterTabItemActive';
    const data = movieData.theater;
    const onClickTabMock = jest.fn();
    const wrapper = shallow(
      <MovieTheaterTab
        data={data}
        onClickTab={onClickTabMock} />
    );

    const movieTheaterTabItemNodes1 = wrapper.find('div.MovieTheaterTab div');
    const movieTheaterTabItemNodes1First = movieTheaterTabItemNodes1.at(0);
    const movieTheaterTabItemNodes1Last = movieTheaterTabItemNodes1.at(movieTheaterTabItemNodes1.length - 1);
    movieTheaterTabItemNodes1Last.simulate('click');
    const movieTheaterTabItemNodes2 = wrapper.find('div.MovieTheaterTab div');
    const movieTheaterTabItemNodes2First = movieTheaterTabItemNodes2.at(0);
    const movieTheaterTabItemNodes2Last = movieTheaterTabItemNodes2.at(movieTheaterTabItemNodes2.length - 1);

    expect(movieTheaterTabItemNodes1First.props().className).toEqual(movieTheaterTabItemActiveClass);
    expect(movieTheaterTabItemNodes1Last.props().className).toEqual(movieTheaterTabItemClass);
    expect(movieTheaterTabItemNodes2First.props().className).toEqual(movieTheaterTabItemClass);
    expect(movieTheaterTabItemNodes2Last.props().className).toEqual(movieTheaterTabItemActiveClass);
  });

  it('プロップスのテスト', () => {
    const data = movieData.theater;
    const wrapper = shallow(
      <MovieTheaterTab data={data} />
    );

    const movieTheaterTabItemNodes = wrapper.find('div.MovieTheaterTab div');
    expect(movieTheaterTabItemNodes).toHaveLength(data.length);
    data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      const movieTheaterTabItemNode = movieTheaterTabItemNodes.at(theaterByAreaPrefectureIdx);
      expect(movieTheaterTabItemNode.text()).toEqual(theaterByAreaPrefecture.area.name);
    });
  });
})