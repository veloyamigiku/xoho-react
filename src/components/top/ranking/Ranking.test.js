import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Ranking from './Ranking';
import { ranking } from './RankingData';
import RankingItem from './RankingItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Rankingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = ranking;
    const wrapper = shallow(
      <Ranking data={data} />
    );

    const rankingItemNodes = wrapper.find(RankingItem);
    expect(rankingItemNodes).toHaveLength(data.length);
    data.forEach(function (rankingItem, rankingItemIdx) {
      const rankingItemNode = rankingItemNodes.at(rankingItemIdx);
      expect(rankingItemNode.props().data).toEqual(rankingItem);
    });
    
  });
});
