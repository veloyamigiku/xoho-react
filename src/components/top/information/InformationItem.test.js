import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { information } from './InformationData';
import InformationItem from './InformationItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('InformationItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = information[0];
    const wrapper = shallow(<InformationItem data={data} />);

    const informationItemImgNode = wrapper.find('img.InformationItemImg');
    expect(informationItemImgNode).toHaveLength(1);
    expect(informationItemImgNode.at(0).props().src).toEqual(data.imgUrl);
    
    const informationItemTypeNode = wrapper.find('div.InformationItemType');
    expect(informationItemTypeNode).toHaveLength(1);
    expect(informationItemTypeNode.at(0).text()).toEqual(data.type);
    expect(informationItemTypeNode.at(0).props().style.backgroundColor).toEqual(data.typeBackColor);
    expect(informationItemTypeNode.at(0).props().style.color).toEqual(data.typeColor);
    
    const informationItemContent = wrapper.find('div.InformationItemContent');
    expect(informationItemContent).toHaveLength(1);
    expect(informationItemContent.at(0).props().dangerouslySetInnerHTML.__html).toEqual(data.title);
  });
});
