import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxAbout from './ImaxAbout';
import ImaxContent from './ImaxContent';
import ImaxTheater from './ImaxTheater';
import { imaxTheaterData } from './ImaxTheaterData';
import { imaxTopData } from './ImaxTopData';
import { getTheaters } from './ImaxUtils';
import ImaxMovie from './ImaxMovie';
import { ranking } from '../../top/ranking/RankingData';

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

    const imaxMovieData = {
      movieTitleImgUrl: imaxTopData.nowShowingImgUrl,
      movieTitleBgImgUrl: imaxTopData.nowShowingBgImgUrl,
      movie: ranking
    }
    const imaxMovieNode = wrapper.find(ImaxMovie);
    expect(imaxMovieNode).toHaveLength(1);
    expect(imaxMovieNode.at(0).props().data).toEqual(imaxMovieData);

    const imaxAboutNodes = wrapper.find(ImaxAbout);
    expect(imaxAboutNodes).toHaveLength(2);
    const imaxLaserAboutNode = imaxAboutNodes.at(0);
    expect(imaxLaserAboutNode.props().data).toEqual(imaxTopData.laser);
    const imaxDigitalAboutNode = imaxAboutNodes.at(1);
    expect(imaxDigitalAboutNode.props().data).toEqual(imaxTopData.imax);
  });
});
