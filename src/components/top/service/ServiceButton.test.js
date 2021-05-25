import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ServiceButton from './ServiceButton';
import { service } from './ServiceData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ServiceButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service.buttonGroup1[0];
    const wrapper = shallow(
      <ServiceButton data={data} />
    );

    const serviceButtonLinkNode = wrapper.find('a.ServiceButtonLink');
    expect(serviceButtonLinkNode).toHaveLength(1);
    expect(serviceButtonLinkNode.at(0).props().href).toEqual(data.url);

    const serviceButtonIconNode = wrapper.find(FontAwesomeIcon);
    if (data.icon) {
      expect(serviceButtonIconNode).toHaveLength(1);
      expect(serviceButtonIconNode.at(0).props().icon).toEqual(data.icon);
    } else {
      expect(serviceButtonIconNode).toHaveLength(0);
    }

    const serviceButtonTitleNode = wrapper.find('div.ServiceButtonTitle');
    expect(serviceButtonTitleNode).toHaveLength(1);
    expect(serviceButtonTitleNode.at(0).text()).toEqual(data.title);
    expect(serviceButtonTitleNode.at(0).props().style.color).toEqual(data.titleColor);
  });
});
