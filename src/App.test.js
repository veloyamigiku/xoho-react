import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
});
