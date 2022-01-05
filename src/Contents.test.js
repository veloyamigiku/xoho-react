import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Contents from './Contents';
import NowPlaying from './components/now_playing/NowPlaying';
import Top from './components/top/Top';
import ComingSoon from './components/coming_soon/ComingSoon';
import TheaterTop from './components/theater/TheaterTop';
import ImaxTop from './components/theater/imax/ImaxTop';
import MovieTop from './components/movie/MovieTop';
import { Route } from 'react-router-dom';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('Contentsコンポーネント', () => {

  it('ルーティングのテスト', () => {
    const wrapper = shallow(<Contents />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(pathMap['/']).toEqual(Top);
    expect(pathMap['/movie/now_playing']).toEqual(NowPlaying);
    expect(pathMap['/movie/coming_soon']).toEqual(ComingSoon);
    expect(pathMap['/theater']).toEqual(TheaterTop);
    expect(pathMap['/theater/imax']).toEqual(ImaxTop);
    expect(pathMap['/movie/:id']).toEqual(MovieTop);
  });
  
});
