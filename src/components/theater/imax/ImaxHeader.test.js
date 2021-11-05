import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxHeader from './ImaxHeader';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxHeaderコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData;
    const wrapper = shallow(<ImaxHeader data={data} />);

    const imaxHeaderLogoImgNode = wrapper.find('img.ImaxHeaderLogo');
    expect(imaxHeaderLogoImgNode).toHaveLength(1);
    expect(imaxHeaderLogoImgNode.at(0).props().src).toEqual(data.logo);

    const imaxHeaderTitleImgNode = wrapper.find('img.ImaxHeaderTitleImg');
    expect(imaxHeaderTitleImgNode).toHaveLength(1);
    expect(imaxHeaderTitleImgNode.at(0).props().src).toEqual(data.titleImgUrl);
  });
});
