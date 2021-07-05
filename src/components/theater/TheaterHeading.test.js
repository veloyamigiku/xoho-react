import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TheaterHeading from './TheaterHeading';
import { theaterHeadingData } from './TheaterHeadingData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterHeadingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterHeadingData.TL;
    const wrapper = shallow(<TheaterHeading data={data} />);

    const theaterHeadingTitltNode = wrapper.find('div.TheaterHeadingTitle');
    expect(theaterHeadingTitltNode).toHaveLength(1);
    expect(theaterHeadingTitltNode.at(0).text()).toEqual(data.title);

    const theaterHeadingSubNode = wrapper.find('div.TheaterHeadingSub');
    expect(theaterHeadingSubNode).toHaveLength(1);
    expect(theaterHeadingSubNode.at(0).text()).toEqual(data.sub);
  });
});
