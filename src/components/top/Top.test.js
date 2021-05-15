import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Top from './Top';
import TopMenu from '../common/TopMenu';
import LoginMenu from './login_menu/LoginMenu';
import { act } from '@testing-library/react';
import axios from 'axios';
import { loginMenu } from './login_menu/LoginMenuData';
import { topMenu } from '../common/TopMenuData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('Topコンポーネント', () => {
  
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu":
          return {
            data: topMenu
          };
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu":
          return {
            data: loginMenu
          };
      }
    });
  })

  it('レンダリングのテスト', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<Top />);
    });

    wrapper.update();
    const topMenuNode = wrapper.find(TopMenu);
    expect(topMenuNode).toHaveLength(1);
    expect(topMenuNode.at(0).props().data).toEqual(topMenu);

    const loginMenuNode = wrapper.find(LoginMenu);
    expect(loginMenuNode).toHaveLength(1);
    expect(loginMenuNode.at(0).props().data).toEqual(loginMenu);
  });
});
