import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxAbout from './ImaxAbout';
import { imaxTopData } from './ImaxTopData';
import ImaxInfoText from './ImaxInfoText';
import ImaxInfoImage from './ImaxInfoImage';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxAboutコンポーネント', () => {

  it('プロップスのテスト_共通', () => {
    const data = imaxTopData.laser;
    const wrapper = shallow(
      <ImaxAbout data={data} />
    );

    const titleImgNode = wrapper.find('img.ImaxAboutTitleImg');
    expect(titleImgNode).toHaveLength(1);
    expect(titleImgNode.at(0).props().src).toEqual(data.titleImgUrl);

    const imgNode = wrapper.find('img.ImaxAboutImg');
    expect(imgNode).toHaveLength(1);
    expect(imgNode.at(0).props().src).toEqual(data.imgUrl);

    const textImgNode = wrapper.find('img.ImaxAboutTextImg')
    expect(textImgNode).toHaveLength(1);
    expect(textImgNode.at(0).props().src).toEqual(data.textImgUrl);
    
  });

  it('プロップスのテスト_Laser', () => {

    const data = imaxTopData.laser;
    const wrapper = shallow(
      <ImaxAbout data={data} />
    );

    const imaxInfoTextNodes = wrapper.find(ImaxInfoText);
    expect(imaxInfoTextNodes).toHaveLength(data.info.length);
    data.info.forEach(function (info, infoIdx) {
      const imaxInfoTextNode = imaxInfoTextNodes.at(infoIdx);
      expect(imaxInfoTextNode.props().data).toEqual(info);
    });

  });

  it('プロップスのテスト_Digital', () => {

    const data = imaxTopData.imax;
    const wrapper = shallow(
      <ImaxAbout data={data} />
    );

    const imaxInfoImageNodes = wrapper.find(ImaxInfoImage);
    expect(imaxInfoImageNodes).toHaveLength(data.info.length);
    data.info.forEach(function (info, infoIdx) {
      const imaxInfoImageNode = imaxInfoImageNodes.at(infoIdx);
      expect(imaxInfoImageNode.props().data).toEqual(info);
    });

  });

});
