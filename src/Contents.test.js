import { act } from '@testing-library/react';
import axios from 'axios';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import Contents from './Contents';
import NowPlaying from './components/now_playing/NowPlaying';
import Top from './components/top/Top';

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
  })
});
