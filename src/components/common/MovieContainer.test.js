import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { comingSoon } from '../coming_soon/ComingSoonData';
import MovieContainer from './MovieContainer';
import MovieContainerItem from './MovieContainerItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon;
    const wrapper = shallow(
      <MovieContainer data={data} />
    );

    const movieContainerItemNodes = wrapper.find(MovieContainerItem);
    expect(movieContainerItemNodes).toHaveLength(comingSoon.length);
    comingSoon.forEach(function (movieContainerItem, movieContainerItemIdx){
      const movieContainerItemNode = movieContainerItemNodes.at(movieContainerItemIdx);
      expect(movieContainerItemNode.props().data).toEqual(movieContainerItem);
    });
  });
});
