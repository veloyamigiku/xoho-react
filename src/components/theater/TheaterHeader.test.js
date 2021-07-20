import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { theaterData } from './TheaterData';
import TheaterHeader from './TheaterHeader';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('TheaterHeaderコンポーネント', () => {
  it('イベントのテスト', () => {
    const data = theaterData[0].header;
    const clickMock = jest.fn();
    const wrapper = shallow(
      <TheaterHeader
        data={data}
        click={clickMock} />);
    
    const theaterHeaderNode = wrapper.find('div.TheaterHeader');
    expect(theaterHeaderNode).toHaveLength(1);
    theaterHeaderNode.at(0).simulate('click');
    expect(clickMock.mock.calls).toHaveLength(1);
  });

  it('プロップスのテスト', () => {
    const data = theaterData[0].header;
    const wrapper = shallow(<TheaterHeader data={data} />);

    const theaterHeaderTitleNode = wrapper.find('div.TheaterHeaderTitle');
    expect(theaterHeaderTitleNode).toHaveLength(1);
    expect(theaterHeaderTitleNode.at(0).text()).toEqual(data.title);
    
    const theaterHeaderSubNode = wrapper.find('div.TheaterHeaderSub');
    expect(theaterHeaderSubNode).toHaveLength(1);
    expect(theaterHeaderSubNode.at(0).text()).toEqual(data.sub);

    const theaterHeaderOptionNode = wrapper.find('div.TheaterHeaderOption');
    expect(theaterHeaderOptionNode).toHaveLength(1);
    expect(theaterHeaderOptionNode.at(0).text()).toEqual(data.option);
  });
});
