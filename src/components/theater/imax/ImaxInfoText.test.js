import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImaxInfoText from './ImaxInfoText';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImaxInfoTextコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData.laser.info[0];
    const wrapper = shallow(<ImaxInfoText data={data} />);

    const headerNode = wrapper.find('div.ImaxInfoTextHeader');
    expect(headerNode).toHaveLength(1);
    expect(headerNode.at(0).text()).toEqual(data.header);

    const bodyNode = wrapper.find('div.ImaxInfoTextBody');
    expect(bodyNode).toHaveLength(1);
    expect(bodyNode.at(0).text()).toEqual(data.body);
  });
});
