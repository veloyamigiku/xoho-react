import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import Contents from './Contents';
import NowPlaying from './components/now_playing/NowPlaying';
import Top from './components/top/Top';
import ComingSoon from './components/coming_soon/ComingSoon';
import TheaterTop from './components/theater/TheaterTop';
import ImaxTop from './components/theater/imax/ImaxTop';
import MovieTop from './components/movie/MovieTop';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

jest.mock('axios');

describe('Contentsコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async () => {
      return {
        data: {}
      };
    });
  });

  it('ルーティングのテスト_' + MovieTop.name, async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/movie/1']}>
          <Contents />
        </MemoryRouter>
      );
    });
    wrapper.update();

    const movieTop = wrapper.find(MovieTop);
    expect(movieTop).toHaveLength(1);
  });

  it('ルーティングのテスト_' + Top.name, async () => {
    let wrapper; 
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <Contents />
        </MemoryRouter>
      );
    });
    wrapper.update();

    const top = wrapper.find(Top);
    expect(top).toHaveLength(1);
  });

  it('ルーティングのテスト_' + NowPlaying.name, async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/movie/now_playing']}>
          <Contents />
        </MemoryRouter>
      );
    });
    wrapper.update();

    const nowPlaying = wrapper.find(NowPlaying);
    expect(nowPlaying).toHaveLength(1);
  });

  it('ルーティングのテスト_' + ComingSoon.name, async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/movie/coming_soon']}>
          <Contents />
        </MemoryRouter>
      )
    });
    wrapper.update();

    const comingSoon = wrapper.find(ComingSoon);
    expect(comingSoon).toHaveLength(1);
  });
  
  it('ルーティングのテスト_' + TheaterTop.name, async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/theater']}>
          <Contents />
        </MemoryRouter>
      )
    });
    wrapper.update();

    const theater = wrapper.find(TheaterTop);
    expect(theater).toHaveLength(1);
  });

  it('ルーティングのテスト_' + ImaxTop.name, async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/theater/imax']}>
          <Contents />
        </MemoryRouter>
      )
    });
    wrapper.update();

    const imax = wrapper.find(ImaxTop);
    expect(imax).toHaveLength(1);
  });
  
});
