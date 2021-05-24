import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { service } from './ServiceData';
import ServiceItem from './ServiceItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ServiceItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service.item[0];
    const wrapper = shallow(
      <ServiceItem data={data} />
    );

    const serviceItemLinkNode = wrapper.find('a.ServiceItemLink');
    expect(serviceItemLinkNode).toHaveLength(1);
    expect(serviceItemLinkNode.at(0).props().href).toEqual(data.url);

    const serviceItemImgNode = wrapper.find('img.ServiceItemImg');
    expect(serviceItemImgNode).toHaveLength(1);
    expect(serviceItemImgNode.at(0).props().src).toEqual(data.imgUrl);

    const serviceItemTitleNode = wrapper.find('div.ServiceItemTitle');
    expect(serviceItemTitleNode).toHaveLength(1);
    expect(serviceItemTitleNode.at(0).text()).toEqual(data.title);

    const serviceItemSubNode = wrapper.find('div.ServiceItemSub');
    expect(serviceItemSubNode).toHaveLength(1);
    expect(serviceItemSubNode.at(0).text()).toEqual(data.sub);
  });
});
