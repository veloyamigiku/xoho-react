import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Top from './components/top/Top';
import { MemoryRouter } from 'react-router';
import Contents from './Contents';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Contentsコンポーネント', () => {
  it('ルーティングのテスト_' + Top.name, () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Contents />
      </MemoryRouter>
    );
    const top = wrapper.find(Top);
    expect(top).toHaveLength(1);
  });
});
