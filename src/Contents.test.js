import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Top from './components/top/Top';
import { MemoryRouter } from 'react-router';
import Contents from './Contents';
import axios from 'axios';
import { act } from '@testing-library/react';

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
});
