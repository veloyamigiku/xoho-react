import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { topHeadingData } from '../top/TopHeadingData';
import Heading from './Heading';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Headingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topHeadingData['R'];
    const wrapper = shallow(<Heading data={data} />);

    const headingTitleNode = wrapper.find('div.HeadingTitle');
    expect(headingTitleNode).toHaveLength(1);
    expect(headingTitleNode.at(0).text()).toEqual(data.title);
    const headingSubNode = wrapper.find('div.HeadingSub');
    expect(headingSubNode.at(0).text()).toEqual(data.sub);
  });
});
