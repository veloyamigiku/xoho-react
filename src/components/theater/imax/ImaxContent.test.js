import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxContent from './ImaxContent';
import ImaxTheater from './ImaxTheater';
import { imaxTheaterData } from './ImaxTheaterData';
import { imaxTopData } from './ImaxTopData';
import { getTheater } from './ImaxUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxContentコンポーネント', () => {

  it('プロップスのテスト', () => {
    const data = {
      topData: imaxTopData,
        theaterData: {
          6: imaxTheaterData[0],
          1: imaxTheaterData[1]
        }
    };
    const wrapper = mount(<ImaxContent data={data} />);

    const imaxTheaterNodes = wrapper.find(ImaxTheater);
    expect(imaxTheaterNodes).toHaveLength(2);
    
    const imaxLaserTheaterNode = imaxTheaterNodes.at(0);
    const imaxLasertTheaterData = {
      introImgUrl: data.topData.lasertIntroImgUrl,
      theaterList: getTheater(data.theaterData[6])
    }
    expect(imaxLaserTheaterNode.props().data).toEqual(imaxLasertTheaterData);

    const imaxDigitalTheaterNode = imaxTheaterNodes.at(1);
    const imaxDigitalTheaterData = {
      introImgUrl: data.topData.introImgUrl,
      theaterList: getTheater(data.theaterData[1])
    }
    expect(imaxDigitalTheaterNode.props().data).toEqual(imaxDigitalTheaterData);
  });

});