import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import NowPlaying from './NowPlaying';
import { topMenu } from '../common/TopMenuData';
import TopMenu from '../common/TopMenu';
import Heading from '../common/Heading';
import LargeButton from '../common/LargeButton';
import { nowPlayingHeadingData } from './NowPlayingHeadingData';
import { nowPlayingLargeButton } from './NowPlayingLargeButtonData';
import LargeButtonContainer from '../common/LargeButtonContainer';
import MovieContainer from '../common/MovieContainer';
import { nowPlaying } from './NowPlayingData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('NowPlayingコンポーネント', () => {
  
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=react':
          return {
            data: topMenu
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=now_playing':
          return {
            data: nowPlayingLargeButton
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/now_playing?front_type=react':
          return {
            data: nowPlaying
          };
      }
    })
  });

  it('レンダリングのテスト', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<NowPlaying />);
    });
    wrapper.update();

    const topMenuNode = wrapper.find(TopMenu);
    expect(topMenuNode).toHaveLength(1);
    expect(topMenuNode.at(0).props().data).toEqual(topMenu);

    const headingNodes = wrapper.find(Heading);
    expect(headingNodes).toHaveLength(Object.keys(nowPlayingHeadingData).length);

    const nowPlayingHeadingNode = headingNodes.at(0);
    expect(nowPlayingHeadingNode).toHaveLength(1);
    expect(nowPlayingHeadingNode.props().data).toEqual(nowPlayingHeadingData.NP);

    const movieContainerNode = wrapper.find(MovieContainer);
    expect(movieContainerNode).toHaveLength(1);
    expect(movieContainerNode.at(0).props().data).toEqual(nowPlaying);

    const largeButtonContainerNode = wrapper.find(LargeButtonContainer);
    expect(largeButtonContainerNode).toHaveLength(1);
    expect(largeButtonContainerNode.at(0).props().data).toEqual(nowPlayingLargeButton);

  });
});
