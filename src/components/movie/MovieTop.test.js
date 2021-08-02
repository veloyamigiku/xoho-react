import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTop from './MovieTop';
import MovieSummary from './MovieSummary';
import { headingData } from './HeadingData';
import Heading from '../common/Heading';
import LargeButtonContainer from '../common/LargeButtonContainer';
import { movieLargeButton } from './MovieLargeButtonData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('MovieTopコンポーネント', () => {

  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info':
          return {
            data: movieData
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=react&page_type=movie':
          return {
            data: movieLargeButton
          };
      }
    });
  });

  it('レンダリングのテスト', async () => {
    const data = movieData;
    let wrapper;
    await act(async () => {
      wrapper = mount(<MovieTop />);
    });
    wrapper.update();

    const movieSummaryNode = wrapper.find(MovieSummary);
    expect(movieSummaryNode).toHaveLength(1);
    expect(movieSummaryNode.at(0).props().data).toEqual(data);

    const headingNodes = wrapper.find(Heading);
    expect(headingNodes).toHaveLength(Object.keys(headingData).length);
    const nhHeadingNode = headingNodes.at(0)
    expect(nhHeadingNode.props().data).toEqual(headingData.NH)
    const pbttHeadingNode = headingNodes.at(1)
    expect(pbttHeadingNode.props().data).toEqual(headingData.PBTT)
    const tlisHeadingNode = headingNodes.at(2)
    expect(tlisHeadingNode.props().data).toEqual(headingData.TLIS)

    const largeButtonContainerNode = wrapper.find(LargeButtonContainer);
    expect(largeButtonContainerNode).toHaveLength(1);
    expect(largeButtonContainerNode.at(0).props().data).toEqual(movieLargeButton);
  });

});
