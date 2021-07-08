import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Theater from './Theater';
import { theaterData } from './TheaterData';
import TheaterPrefecture from './TheaterPrefecture';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterPrefectureコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0].prefecture[0];
    const wrapper = shallow(<TheaterPrefecture data={data} />);

    const prefectureNameNode = wrapper.find('div.TheaterPrefectureName');
    expect(prefectureNameNode).toHaveLength(1);
    expect(prefectureNameNode.at(0).text()).toEqual(data.name);
    const prefectureSubNode = wrapper.find('div.TheaterPrefectureSub');
    expect(prefectureSubNode).toHaveLength(1);
    expect(prefectureSubNode.at(0).text()).toEqual(data.sub);
    const theaterNodes = wrapper.find(Theater);
    expect(theaterNodes).toHaveLength(data.theater.length);
    if (data.theater && data.theater.length > 0) {
      data.theater.forEach(function (theater, theaterIdx) {
        const theaterNode = theaterNodes.at(theaterIdx);
        expect(theaterNode.props().data).toEqual(theater);
      });
    }
  });
});
