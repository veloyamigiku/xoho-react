import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { importantInformation } from './ImportantInformationData';
import ImportantInformation from './ImportantInformation';
import ImportantInformationItem from './ImportantInformationItem';

Enzyme.configure({
  adapter: new EnzymeAdapter() 
});

describe('ImportantInformationコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = importantInformation;
    const wrapper = shallow(
      <ImportantInformation data={data} />
    );

    const importantInformationItemNodes = wrapper.find(ImportantInformationItem);
    expect(importantInformationItemNodes).toHaveLength(data.length);
    data.forEach(function (importantInformationItem, importantInformationItemIdx) {
      const importantInformationItemNode = importantInformationItemNodes.at(importantInformationItemIdx);
      expect(importantInformationItemNode.props().data).toEqual(importantInformationItem);
    });
  });
});
