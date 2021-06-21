import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { getDayOfWeekStr } from '../../utils/common/date';
import { comingSoon } from '../coming_soon/ComingSoonData';
import MovieHeader from './MovieHeader';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieHeaderコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon[0];
    const wrapper = shallow(
      <MovieHeader data={data} />
    );

    const movieHeaderTitleNode = wrapper.find('div.MovieHeaderTitle');
    expect(movieHeaderTitleNode).toHaveLength(1);
    const dayOfWeek = getDayOfWeekStr(
      data.year,
      data.month,
      data.day);
    expect(movieHeaderTitleNode.at(0).text()).toEqual(data.month + '/' + data.day + '(' + dayOfWeek + ')');
  });
});
