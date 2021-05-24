import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdatper from 'enzyme-adapter-react-16';
import { box } from './BoxData';
import BoxItem from './BoxItem';

Enzyme.configure({
  adapter: new EnzymeAdatper()
});

describe('BoxItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = box[0];
    const wrapper = shallow(
      <BoxItem data={data} />
    );

    const boxItemTitleNode = wrapper.find('div.BoxItemTitle');
    expect(boxItemTitleNode).toHaveLength(1);
    expect(boxItemTitleNode.at(0).text()).toEqual(data.title);
    const boxItemImgNode = wrapper.find('img.BoxItemImg');
    expect(boxItemImgNode).toHaveLength(1);
    expect(boxItemImgNode.at(0).props().src).toEqual(data.imgUrl);
    const boxItemDescNode = wrapper.find('div.BoxItemDesc');
    expect(boxItemDescNode).toHaveLength(1);
    expect(boxItemDescNode.at(0).text()).toEqual(data.desc);
    const boxItemButtonLinkNode = wrapper.find('a.BoxItemButtonLink');
    expect(boxItemButtonLinkNode).toHaveLength(1);
    expect(boxItemButtonLinkNode.at(0).props().href).toEqual(data.buttonUrl);
    const boxItemButtonLinkLabelNode = wrapper.find('div.BoxItemButtonLinkLabel');
    expect(boxItemButtonLinkLabelNode).toHaveLength(1);
    expect(boxItemButtonLinkLabelNode.at(0).text()).toEqual(data.buttonTitle);
  });
});
