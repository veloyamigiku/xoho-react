import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Header from './Header';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Headerコンポーネント', () => {
  it('レンダリングのテスト', () => {
    const wrapper = shallow(<Header />);

    const headerImgNode = wrapper.find('div.Header img');
    expect(headerImgNode).toHaveLength(1);
    expect(headerImgNode.props().src).toBe('https://lh3.googleusercontent.com/pw/ACtC-3eyqUIGUbKYieiWE7ac91OI4ztroZjKCbJAhH6IUiqqhK4_Gzcc1OmVTS18H92lm-hx1vJ6U_Ytf_F25a2QLvPh1xb0Xl0OvR6QhYePBfOBCLoUQglFFZUifHRYh-HpqHSBu8Fs-55QZFJs-ZEjAqNW=w200-h64-no?authuser=0');

  })
})