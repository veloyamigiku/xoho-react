import { Route, Switch } from 'react-router';
import Top from './components/top/Top';
import NowPlaying from './components/now_playing/NowPlaying';
import ComingSoon from './components/coming_soon/ComingSoon';
import TheaterTop from './components/theater/TheaterTop';

const Contents = function() {
  return (
    <Switch>
      <Route exact path='/' component={Top} />
      <Route exact path='/movie/now_playing' component={NowPlaying} />
      <Route exact path='/movie/coming_soon' component={ComingSoon} />
      <Route exact path='/theater' component={TheaterTop} />
    </Switch>
  );
}

export default Contents;
