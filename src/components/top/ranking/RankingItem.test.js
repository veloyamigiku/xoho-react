import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ranking } from './RankingData';
import RankingItem from './RankingItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('RankingItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = ranking[0];
    const wrapper = shallow(
      <RankingItem data={data} />
    );

    const rankingItemLinkNode = wrapper.find('a.RankingItemLink');
    expect(rankingItemLinkNode).toHaveLength(1);
    expect(rankingItemLinkNode.at(0).props().href).toEqual(data.url);

    const rankingItemImgNode = wrapper.find('img.RankingItemImg');
    expect(rankingItemImgNode).toHaveLength(1);
    expect(rankingItemImgNode.at(0).props().src).toEqual(data.imgUrl);

    const rankingItemTitleNode = wrapper.find('div.RankingItemTitle');
    expect(rankingItemTitleNode).toHaveLength(1);
    expect(rankingItemTitleNode.at(0).text()).toEqual(data.title);
    
  });
});
