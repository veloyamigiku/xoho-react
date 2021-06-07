import { Route, Switch } from "react-router";
import Top from "./components/top/Top";
import NowPlaying from "./components/now_playing/NowPlaying";

const Contents = function() {
  return (
    <Switch>
      <Route exact path='/' component={Top} />
      <Route exact path='/movie/now_playing' component={NowPlaying} />
    </Switch>
  );
}

export default Contents;
