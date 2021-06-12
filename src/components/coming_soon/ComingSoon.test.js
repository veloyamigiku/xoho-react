import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TopMenu from '../common/TopMenu';
import { topMenu } from '../common/TopMenuData';
import ComingSoon from './ComingSoon';
import Heading from '../common/Heading';
import { comingSoonHeadingData } from './ComingSoonHeadingData';
import { comingSoonLargeButton } from './ComingSoonLargeButtonData';
import LargeButtonContainer from '../common/LargeButtonContainer';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('ComingSoonコンポーネント', () => {
  
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=react":
          return {
            data: topMenu
          };
        case "https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=coming_soon":
          return {
            data: comingSoonLargeButton
          };
      }
    });
  });

  it('レンダリングのテスト', async () => {
    
    let wrapper;
    await act(async () => {
      wrapper = mount(<ComingSoon />);
    });
    wrapper.update();

    const topMenuNode = wrapper.find(TopMenu);
    expect(topMenuNode).toHaveLength(1);
    expect(topMenuNode.at(0).props().data).toEqual(topMenu);

    const headingNodes = wrapper.find(Heading);
    expect(headingNodes).toHaveLength(Object.keys(comingSoonHeadingData).length);
    const comingSoonHeadingNode = headingNodes.at(0);
    expect(comingSoonHeadingNode.props().data).toEqual(comingSoonHeadingData.CS);

    const comingSoonLargeButtonContainer = wrapper.find(LargeButtonContainer);
    expect(comingSoonLargeButtonContainer).toHaveLength(1);
    expect(comingSoonLargeButtonContainer.at(0).props().data).toEqual(comingSoonLargeButton);
    
  });

});
