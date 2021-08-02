import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieHeadingData } from './MovieHeadingData';
import MovieHeading from './MovieHeading';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('MovieHeadingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieHeadingData.NPS;
    const wrapper = shallow(<MovieHeading data={data} />);

    const movieHeadingTitleNode = wrapper.find('div.MovieHeadingTitle');
    expect(movieHeadingTitleNode).toHaveLength(1);
    expect(movieHeadingTitleNode.at(0).text()).toEqual(data.title)
  });
});
