import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { importantInformation } from './ImportantInformationData';
import ImportantInformationItem from './ImportantInformationItem';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('ImportantInformationItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = importantInformation[0];
    const wrapper = shallow(
      <ImportantInformationItem data={data} />
    );

    const importantInformationLinkNode = wrapper.find('a.ImportantInformationItemLink');
    expect(importantInformationLinkNode).toHaveLength(1);
    expect(importantInformationLinkNode.at(0).props().href).toEqual(data.url);
    expect(importantInformationLinkNode.at(0).text()).toEqual(data.label);
  });
});
