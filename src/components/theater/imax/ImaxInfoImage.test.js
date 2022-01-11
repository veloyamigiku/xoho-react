import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxInfoImage from './ImaxInfoImage';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxInfoImageコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData.imax.info[0];
    const wrapper = shallow(<ImaxInfoImage data={data} />);

    const titleImgNode = wrapper.find('img.ImaxInfoImageTitle');
    expect(titleImgNode).toHaveLength(1);
    expect(titleImgNode.at(0).props().src).toEqual(data.titleImgUrl);

    const subTitleImgNode = wrapper.find('img.ImaxInfoImageSubTitle');
    expect(subTitleImgNode).toHaveLength(1);
    expect(subTitleImgNode.at(0).props().src).toEqual(data.subTitleImgUrl);

    const imgNode = wrapper.find('img.ImaxInfoImageImg');
    expect(imgNode).toHaveLength(1);
    expect(imgNode.at(0).props().src).toEqual(data.imgUrl);

    const textImgNode = wrapper.find('img.ImaxInfoImageText');
    expect(textImgNode).toHaveLength(1);
    expect(textImgNode.at(0).props().src).toEqual(data.textImgUrl);
  });
});
