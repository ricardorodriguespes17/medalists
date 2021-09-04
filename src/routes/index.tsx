import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryPage from "../pages/country";
import Main from "../pages/main";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={CountryPage} path="/country/:symbol" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
