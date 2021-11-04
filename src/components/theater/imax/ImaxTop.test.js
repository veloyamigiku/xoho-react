import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import ImaxHeader from './ImaxHeader';
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
      }
    });

  });

  it('レンダリングのテスト', async () => {
    
    let wrapper;
    await act(async () => {
      wrapper = mount(<ImaxTop />);
    });
    wrapper.update();

    const imaxHeaderNode = wrapper.find(ImaxHeader);
    expect(imaxHeaderNode).toHaveLength(1);
    expect(imaxHeaderNode.at(0).props().data).toEqual(imaxTopData);

  });

});
