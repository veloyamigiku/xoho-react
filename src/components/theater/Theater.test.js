import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Theater from './Theater';
import TopMenu from '../common/TopMenu';
import { topMenu } from '../common/TopMenuData';
import Heading from '../common/Heading';
import { headingData } from './HeadingData';
import LargeButtonContainer from '../common/LargeButtonContainer';
import { theaterLargeButton } from '../now_playing/NowPlayingLargeButtonData';
import TheaterHeading from './TheaterHeading';
import { theaterHeadingData } from './TheaterHeadingData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('Theaterコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=react':
          return {
            data: topMenu
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=theater':
          return {
            data: theaterLargeButton
          };
      }
    });
  });

  it('レンダリングのテスト', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<Theater />);
    });
    wrapper.update();

    const topMenuNode = wrapper.find(TopMenu);
    expect(topMenuNode).toHaveLength(1);
    expect(topMenuNode.at(0).props().data).toEqual(topMenu);

    const headingNodes = wrapper.find(Heading);
    expect(headingNodes).toHaveLength(Object.keys(headingData).length);

    const nhHeadingNode = headingNodes.at(0);
    expect(nhHeadingNode.props().data).toEqual(headingData.NH);
    
    const pbttHeadingNode = headingNodes.at(1);
    expect(pbttHeadingNode.props().data).toEqual(headingData.PBTT);

    const theaterHeadingNodes = wrapper.find(TheaterHeading);
    expect(theaterHeadingNodes).toHaveLength(Object.keys(theaterHeadingData).length);

    const tlTheaterHeadingNode = theaterHeadingNodes.at(0);
    expect(tlTheaterHeadingNode).toHaveLength(1);
    expect(tlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.TL);

    const fbtlTheaterHeadingNode = theaterHeadingNodes.at(1);
    expect(fbtlTheaterHeadingNode).toHaveLength(1);
    expect(fbtlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.FBTL);

    const largeButtonContainerNode = wrapper.find(LargeButtonContainer);
    expect(largeButtonContainerNode).toHaveLength(1);
    expect(largeButtonContainerNode.at(0).props().data).toEqual(theaterLargeButton);
  });

});
