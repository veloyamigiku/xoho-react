import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Theater from './Theater';
import { theaterData } from './TheaterData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Theaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[6].prefecture[2].theater[0];
    const wrapper = shallow(<Theater data={data} />);

    const theaterLinkNode = wrapper.find('a.TheaterLink');
    expect(theaterLinkNode).toHaveLength(1);
    expect(theaterLinkNode.at(0).props().href).toEqual(data.url);
    const theaterNameNode = wrapper.find('div.TheaterName');
    expect(theaterNameNode).toHaveLength(1);
    expect(theaterNameNode.at(0).text()).toContain(data.name);
    const theaterSubNode = wrapper.find('div.TheaterSub');
    expect(theaterSubNode).toHaveLength(1);
    expect(theaterSubNode.at(0).text()).toContain(data.sub);
    const theaterTypeNameNodes = wrapper.find('div.TheaterTypeName');
    expect(theaterTypeNameNodes).toHaveLength(data.type.length);
    const theaterTypeIconNodes = wrapper.find(FontAwesomeIcon);
    var typeIconIdx = 0;
    data.type.forEach(function (type, typeIdx) {
      const theaterTypeNameNode = theaterTypeNameNodes.at(typeIdx);
      expect(theaterTypeNameNode.text()).toEqual(type.name);
      if (type.icon) {
        const theaterTypeIconNode = theaterTypeIconNodes.at(typeIconIdx);
        expect(theaterTypeIconNode.props().icon).toEqual(type.icon);
        typeIconIdx += 1;
      }
    });
    const typeIconCount = typeIconIdx === 0 ? 0 : typeIconIdx;
    expect(theaterTypeIconNodes).toHaveLength(typeIconCount);
  })
})