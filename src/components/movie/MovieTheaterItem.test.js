import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterItem from './MovieTheaterItem';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';
import '../../fontawesome';
import axios from 'axios';
import { movieTheaterScheduleDateData } from './MovieTheaterScheduleDateData';
import { movieTheaterScheduleScreenData } from './MovieTheaterScheduleScreenData';
import { act } from '@testing-library/react';
import MovieTheaterItemContent from './MovieTheaterItemContent';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('MovieTheaterItemコンポーネント', () => {

  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=24':
          return {
            data: movieTheaterScheduleDateData
          };
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=22&title=竜とそばかすの姫':
          return {
            data: movieTheaterScheduleScreenData
          };
      }
    });
  });

  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = shallow(
      <MovieTheaterItem data={data} />
    );

    const movieTheaterItemHeaderNode = wrapper.find(MovieTheaterItemHeader);
    expect(movieTheaterItemHeaderNode).toHaveLength(1);
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(data);
  });

  it('プロップスのテスト_子コンポーネントのイベント処理+映画劇場日付取得', async () => {
    const data = movieData.theater[1].prefectures[0].theater[0];
    const wrapper = mount(
      <MovieTheaterItem data={data} />
    );

    const movieTheaterItemHeaderGroupNode = wrapper.find("div.MovieTheaterItemHeaderGroup");
    expect(movieTheaterItemHeaderGroupNode).toHaveLength(1);
    
    await act(async () => {
      movieTheaterItemHeaderGroupNode.at(0).simulate('click');
    });
    wrapper.update();

    const movieTheaterItemContentNode = wrapper.find(MovieTheaterItemContent);
    expect(movieTheaterItemContentNode).toHaveLength(1);
    expect(movieTheaterItemContentNode.at(0).props().dateData).toEqual(movieTheaterScheduleDateData);
    expect(movieTheaterItemContentNode.at(0).props().screenData).toEqual(movieTheaterScheduleScreenData);
  });

});
