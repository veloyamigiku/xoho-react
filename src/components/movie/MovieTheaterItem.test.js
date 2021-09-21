import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { movieData } from './MovieData';
import MovieTheaterItem from './MovieTheaterItem';
import MovieTheaterItemHeader from './MovieTheaterItemHeader';
import '../../fontawesome';
import axios from 'axios';
import { movieTheaterScheduleDateData } from './MovieTheaterScheduleDateData';
import { movieTheaterScheduleScreenData } from './MovieTheaterScheduleScreenData';
import MovieTheaterScheduleDate from './MovieTheaterScheduleDate';
import { act } from '@testing-library/react';
import MovieTheaterScheduleScreen from './MovieTheaterScheduleScreen';

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

  it('プロップスのテスト_子コンポーネントのイベント処理+子コンポーネントの映画劇場日付取得呼び出し', async () => {
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

    const movieTheaterScheduleDateNode = wrapper.find(MovieTheaterScheduleDate);
    expect(movieTheaterScheduleDateNode).toHaveLength(1);
    expect(movieTheaterScheduleDateNode.at(0).props().data).toEqual(movieTheaterScheduleDateData);

    const movieTheaterScheduleScreenNode = wrapper.find(MovieTheaterScheduleScreen);
    expect(movieTheaterScheduleScreenNode).toHaveLength(1);
    expect(movieTheaterScheduleScreenNode.at(0).props().data).toEqual(movieTheaterScheduleScreenData);
  });

});
