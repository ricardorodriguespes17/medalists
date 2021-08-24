import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/main";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
