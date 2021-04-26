import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test('レンダリングのテスト', () => {
  const wrapper = shallow(<App />);

  const headerNode = wrapper.find(Header);
  expect(headerNode).toHaveLength(1);

  const footerNode = wrapper.find(Footer);
  expect(footerNode).toHaveLength(1);
  
});
