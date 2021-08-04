import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheater from './MovieTheater';
import MovieTheaterTab from './MovieTheaterTab';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieTheaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater;
    const wrapper = shallow(
      <MovieTheater data={data} />
    );

    const movieTheaterTabNode = wrapper.find(MovieTheaterTab);
    expect(movieTheaterTabNode).toHaveLength(1);
    expect(movieTheaterTabNode.at(0).props().data).toEqual(data);
  });
});
