import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { theaterData } from './TheaterData';
import TheaterContainer from './TheaterContainer';
import TheaterItem from './TheaterItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData;
    const wrapper = shallow(<TheaterContainer data={data} />);

    const theaterItemNodes = wrapper.find(TheaterItem);
    expect(theaterItemNodes).toHaveLength(data.length);
    data.forEach(function (theaterItem, theaterItemIdx) {
      const theaterItemNode = theaterItemNodes.at(theaterItemIdx);
      expect(theaterItemNode.props().data).toEqual(theaterItem);
    });
  });
});
