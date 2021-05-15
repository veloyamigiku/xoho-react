import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LoginMenu from './LoginMenu';
import LoginMenuButton from './LoginMenuButton';
import { loginMenu } from './LoginMenuData';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('LoginMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallow(
      <LoginMenu data={loginMenu} />
    );

    const loginMenuButtonNodes = wrapper.find(LoginMenuButton);
    expect(loginMenuButtonNodes).toHaveLength(loginMenu.button.length);
    loginMenu.button.forEach(function (loginMenuButton, loginMenuButtonIdx) {
      const loginMenuButtonNode = loginMenuButtonNodes.at(loginMenuButtonIdx);
      expect(loginMenuButtonNode.props().data).toEqual(loginMenuButton);
    });
    const loginMenuLinkNode = wrapper.find('a.LoginMenuLink');
    expect(loginMenuLinkNode).toHaveLength(1);
    expect(loginMenuLinkNode.at(0).text()).toEqual(loginMenu.link.label);
    expect(loginMenuLinkNode.at(0).props().href).toEqual(loginMenu.link.url);
  });
});
