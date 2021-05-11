import { Route, Switch } from "react-router";
import Top from "./components/top/Top";

const Contents = function() {
  return (
    <Switch>
      <Route exact path='/' component={Top} />
    </Switch>
  );
}

export default Contents;
