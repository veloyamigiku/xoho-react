import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { nowPlaying } from '../now_playing/NowPlayingData';
import Movie from './Movie';
import MovieContainer from './MovieContainer';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlaying;
    const wrapper = shallow(<MovieContainer data={data} />);

    const movieNodes = wrapper.find(Movie);
    expect(movieNodes).toHaveLength(data.length);
    data.forEach(function (movie, movieIdx) {
      const movieNode = movieNodes.at(movieIdx);
      expect(movieNode.props().data).toEqual(movie);
    });
    
  });
});
