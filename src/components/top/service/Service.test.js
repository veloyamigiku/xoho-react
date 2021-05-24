import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Service from './Service';
import ServiceButton from './ServiceButton';
import { service } from './ServiceData';
import ServiceDelim from './ServiceDelim';
import ServiceItem from './ServiceItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Serviceコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service;
    const wrapper = shallow(
      <Service data={data} />
    );

    const serviceItemNodes = wrapper.find(ServiceItem);
    expect(serviceItemNodes).toHaveLength(data.item.length);
    data.item.forEach(function (serviceItem, serviceItemIdx) {
      const serviceItemNode = serviceItemNodes.at(serviceItemIdx);
      expect(serviceItemNode.props().data).toEqual(serviceItem);
    });

    const serviceButtonNodes = wrapper.find(ServiceButton);
    expect(serviceButtonNodes).toHaveLength(data.buttonGroup1.length + data.buttonGroup2.length);
    const serviceButtonList = data.buttonGroup1.concat(data.buttonGroup2);
    serviceButtonList.forEach(function (serviceButton, serviceButtonIdx) {
      const serviceButtonNode = serviceButtonNodes.at(serviceButtonIdx);
      expect(serviceButtonNode.props().data).toEqual(serviceButton);
    });

  });
});
