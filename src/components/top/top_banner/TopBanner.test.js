import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TopBanner from './TopBanner';
import TopBannerItem from './TopBannerItem';
import { topBanner } from './TopBannerData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TopBannerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(<TopBanner data={topBanner} />);

    const topBannerItemNodes = wrapper.find(TopBannerItem);
    expect(topBannerItemNodes).toHaveLength(topBanner.length);
    topBanner.forEach(function (topBannerItem, topBannerItemIdx) {
      const topBannerItemNode = topBannerItemNodes.at(topBannerItemIdx);
      expect(topBannerItemNode.props().data).toEqual(topBannerItem);
    });
  });
});
