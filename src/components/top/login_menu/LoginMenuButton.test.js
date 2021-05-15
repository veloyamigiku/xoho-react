import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LoginMenuButton from './LoginMenuButton';
import { loginMenu } from './LoginMenuData';
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('LoginMenuButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = loginMenu.button[0];
    const wrapper = shallow(
      <LoginMenuButton data={data} />
    );
    const loginMenuButtonNode = wrapper.find('div.LoginMenuButton');
    expect(loginMenuButtonNode).toHaveLength(1);
    const loginMenuButtonANode = loginMenuButtonNode.find('a.LoginMenuButtonA');
    expect(loginMenuButtonANode).toHaveLength(1);
    expect(loginMenuButtonANode.at(0).text()).toEqual(data.label);
    expect(loginMenuButtonANode.at(0).props().href).toEqual(data.url);
  });
});
