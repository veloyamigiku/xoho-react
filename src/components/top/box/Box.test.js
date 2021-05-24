import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Box from './Box';
import { box } from './BoxData';
import BoxItem from './BoxItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Boxコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = box;
    const wrapper = shallow(
      <Box data={data} />
    );

    const boxItemNodes = wrapper.find(BoxItem);
    expect(boxItemNodes).toHaveLength(data.length);
    data.forEach(function (boxItem, boxItemIdx) {
      const boxItemNode = boxItemNodes.at(boxItemIdx);
      expect(boxItemNode.props().data).toEqual(boxItem);
    });
  });
});
