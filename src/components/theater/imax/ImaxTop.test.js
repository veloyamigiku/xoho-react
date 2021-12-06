import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import ImaxContent from './ImaxContent';
import ImaxHeader from './ImaxHeader';
import { imaxTheaterData } from './ImaxTheaterData';
import ImaxTop from './ImaxTop';
import { imaxTopData } from './ImaxTopData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('ImaxTopコンポーネント', () => {

  beforeEach(() => {
    
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/imax':
          return {
            data: imaxTopData
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=6,1&front_type=react':
          return {
            data: imaxTheaterData
          };
      }
    });

  });

  it('レンダリングのテスト', async () => {
    const headerData = imaxTopData;
    const contentData = {
      topData: imaxTopData,
      theaterData: {
        6: imaxTheaterData[0],
        1: imaxTheaterData[1]
      }
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<ImaxTop />);
    });
    wrapper.update();

    const imaxHeaderNode = wrapper.find(ImaxHeader);
    expect(imaxHeaderNode).toHaveLength(1);
    expect(imaxHeaderNode.at(0).props().data).toEqual(headerData);

    const imaxContentNode = wrapper.find(ImaxContent);
    expect(imaxContentNode).toHaveLength(1);
    expect(imaxContentNode.at(0).props().data).toEqual(contentData);
    
  });

});
