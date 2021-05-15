import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { topBanner } from './TopBannerData';
import TopBannerItem from './TopBannerItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TopBannerItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topBanner[0];
    const wrapper = shallow(<TopBannerItem data={data} />);

    const topBannerItemLinkNode = wrapper.find('a.TopBannerItemLink');
    expect(topBannerItemLinkNode).toHaveLength(1);
    expect(topBannerItemLinkNode.at(0).props().href).toEqual(data.url);
    const topBannerItemImgNode = topBannerItemLinkNode.find('img.TopBannerItemImg');
    expect(topBannerItemImgNode).toHaveLength(1);
    expect(topBannerItemImgNode.at(0).props().src).toEqual(data.imgUrl);
  });
});
