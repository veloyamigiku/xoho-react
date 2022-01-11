import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxAbout from './ImaxAbout';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxAboutコンポーネント', () => {

  it('プロップスのテスト', () => {
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

    /* const infoTitleImgNodes = wrapper.find('img.ImaxAboutInfoTitleImg');
    expect(infoTitleImgNodes).toHaveLength(data.info.length);

    const infoSubTitleImgNodes = wrapper.find('img.ImaxAboutInfoSubTitleImg');
    expect(infoSubTitleImgNodes).toHaveLength(data.info.length);

    const infoImgNodes = wrapper.find('img.ImaxAboutInfoImg');
    expect(infoImgNodes).toHaveLength(data.info.length);

    const infoTextImgNodes = wrapper.find('img.ImaxAboutInfoTextImg');
    expect(infoTextImgNodes).toHaveLength(data.info.length); */
  });

});
