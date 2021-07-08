import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { theaterData } from './TheaterData';
import TheaterContent from './TheaterContent';
import TheaterPrefecture from './TheaterPrefecture';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0].prefecture;
    const wrapper = shallow(<TheaterContent data={data} />);

    const theaterPrefectureNodes = wrapper.find(TheaterPrefecture);
    expect(theaterPrefectureNodes).toHaveLength(data.length);
    data.forEach(function (theaterPrefecture, theaterPrefectureIdx) {
      const theaterPrefectureNode = theaterPrefectureNodes.at(theaterPrefectureIdx);
      expect(theaterPrefectureNode.props().data).toEqual(theaterPrefecture);
    });
  });
});
