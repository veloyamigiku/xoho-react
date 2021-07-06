import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TheaterContent from './TheaterContent';
import { theaterData } from './TheaterData';
import TheaterHeader from './TheaterHeader';
import TheaterItem from './TheaterItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0];
    const wrapper = shallow(<TheaterItem data={data} />);

    const theaterHeaderNode = wrapper.find(TheaterHeader);
    expect(theaterHeaderNode).toHaveLength(1);
    expect(theaterHeaderNode.at(0).props().data).toEqual(data.header);

    const theaterContentNode = wrapper.find(TheaterContent);
    expect(theaterContentNode).toHaveLength(1);
    expect(theaterContentNode.at(0).props().data).toEqual(data.prefecture);
  });
});
