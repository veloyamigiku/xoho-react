import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTop from './MovieTop';
import MovieSummary from './MovieSummary';

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
    expect(movieSummaryNode.at(0).props().data).toEqual(movieData);    
  });

});
