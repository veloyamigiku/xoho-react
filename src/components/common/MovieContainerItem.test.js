import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MovieContainerItem from './MovieContainerItem';
import MovieHeader from './MovieHeader';
import MovieGroup from './MovieGroup';
import { comingSoon } from '../coming_soon/ComingSoonData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieContainerItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon[0];
    const wrapper = shallow(
      <MovieContainerItem data={data} />
    );

    const movieHeaderNode = wrapper.find(MovieHeader);
    expect(movieHeaderNode).toHaveLength(1);
    expect(movieHeaderNode.at(0).props().data).toEqual(data);

    const movieGroupNode = wrapper.find(MovieGroup);
    expect(movieGroupNode).toHaveLength(1);
    expect(movieGroupNode.at(0).props().data).toEqual(data.movie);
  });
});
