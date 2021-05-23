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
import { topBanner } from './top_banner/TopBannerData';
import TopBanner from './top_banner/TopBanner';
import Heading from '../common/Heading';
import { topHeadingData } from './TopHeadingData';
import Information from './information/Information';
import { information } from './information/InformationData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('Topコンポーネント', () => {
  
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=react":
          return {
            data: topMenu
          };
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu?front_type=react":
          return {
            data: loginMenu
          };
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner?front_type=react":
          return {
            data: topBanner
          };
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information?front_type=react":
          return {
            data: information
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

    const topBannerNode = wrapper.find(TopBanner);
    expect(topBannerNode).toHaveLength(1);
    expect(topBannerNode.at(0).props().data).toEqual(topBanner);

    const headingNodes = wrapper.find(Heading);
    expect(headingNodes).toHaveLength(Object.keys(topHeadingData).length);

    const rankingHeadingNode = headingNodes.at(0);
    expect(rankingHeadingNode.props().data).toEqual(topHeadingData['R']);

    const infoHeadingNode = headingNodes.at(1);
    expect(infoHeadingNode.props().data).toEqual(topHeadingData['I']);
    const informationNode = wrapper.find(Information);
    expect(informationNode).toHaveLength(1);
    expect(informationNode.at(0).props().data).toEqual(information);

    const importantInfoHeadingNode = headingNodes.at(2);
    expect(importantInfoHeadingNode.props().data).toEqual(topHeadingData['II']);

    const serviceHeadingNode = headingNodes.at(3);
    expect(serviceHeadingNode.props().data).toEqual(topHeadingData['S']);
  });
});
