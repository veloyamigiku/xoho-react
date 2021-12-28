import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxContent from './ImaxContent';
import ImaxTheater from './ImaxTheater';
import { imaxTheaterData } from './ImaxTheaterData';
import { imaxTopData } from './ImaxTopData';
import { getTheaters } from './ImaxUtils';

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
    const wrapper = shallow(<ImaxContent data={data} />);

    const imaxTheaterNodes = wrapper.find(ImaxTheater);
    expect(imaxTheaterNodes).toHaveLength(2);
    
    const imaxLaserTheaterNode = imaxTheaterNodes.at(0);
    const imaxLasertTheaterData = {
      imaxType: 6,
      introImgUrl: imaxTopData.lasertIntroImgUrl,
      theater: getTheaters(imaxTheaterData[0]),
      theaterAbout: {
        title: 'IMAX®レーザーとは'
      }
    }
    expect(imaxLaserTheaterNode.props().data).toEqual(imaxLasertTheaterData);

    const imaxDigitalTheaterNode = imaxTheaterNodes.at(1);
    const imaxDigitalTheaterData = {
      imaxType: 1,
      introImgUrl: imaxTopData.introImgUrl,
      theater: getTheaters(imaxTheaterData[1]),
      theaterAbout: {
        title: 'IMAX®とは'
      }
    }
    expect(imaxDigitalTheaterNode.props().data).toEqual(imaxDigitalTheaterData);
  });
});