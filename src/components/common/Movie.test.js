import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { nowPlaying } from '../now_playing/NowPlayingData';
import Movie from './Movie';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Movieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlaying[0];
    const wrapper = shallow(<Movie data={data} />);

    const movieLinkNode = wrapper.find('a.MovieLink');
    expect(movieLinkNode).toHaveLength(1);
    expect(movieLinkNode.at(0).props().href).toEqual(data.url);

    const movieImgNode = wrapper.find('img.MovieImg');
    expect(movieImgNode).toHaveLength(1);
    expect(movieImgNode.at(0).props().src).toEqual(data.img_url);

    const movieTitleNode = wrapper.find('div.MovieTitle');
    expect(movieTitleNode).toHaveLength(1);
    expect(movieTitleNode.at(0).text()).toEqual(data.title);

  });
});
