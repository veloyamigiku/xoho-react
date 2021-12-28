import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ImaxTheater from "./ImaxTheater";
import { imaxTheaterData } from "./ImaxTheaterData";
import { imaxTopData } from "./ImaxTopData";
import { getTheaters } from "./ImaxUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxTheaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = {
      imaxType: 6,
      introImgUrl: imaxTopData.lasertIntroImgUrl,
      theater: getTheaters(imaxTheaterData[0]),
      theaterAbout: {
        title: 'IMAX®レーザーとは'
      }
    };
    const wrapper = shallow(<ImaxTheater data={data} />);

    const imaxTheaterIntroImgNode = wrapper.find('img.IntroImg');
    expect(imaxTheaterIntroImgNode).toHaveLength(1);
    expect(imaxTheaterIntroImgNode.at(0).props().src).toEqual(data.introImgUrl);

    const imaxTheaterImgNodes = wrapper.find('img.TheaterIntroImg');
    expect(imaxTheaterImgNodes).toHaveLength(data.theater.length);
    data.theater.forEach(function (theater, theaterIdx) {
      const imaxTheaterImgNode = imaxTheaterImgNodes.at(theaterIdx);
      expect(imaxTheaterImgNode.props().src).toEqual(theater.introImgUrl[data.imaxType]);
    });
  });
});
