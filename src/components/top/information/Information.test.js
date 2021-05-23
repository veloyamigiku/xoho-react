import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Information from './Information';
import { information } from './InformationData';
import InformationItem from './informationItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Informationコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = information;
    const wrapper = shallow(<Information data={data} />);

    const informationItemNodes = wrapper.find(InformationItem);
    expect(informationItemNodes).toHaveLength(data.length);
    data.forEach(function (info, infoIdx) {
      const informationItemNode = informationItemNodes.at(infoIdx);
      expect(informationItemNode.props().data).toEqual(info);
    });
  });
});
