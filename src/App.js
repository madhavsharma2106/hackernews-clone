import React from "react";
import FrontPage from "./components/pages/FrontPage/container";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/:id" exact={true} component={FrontPage} />
      <Route path="*" exact={true} component={FrontPage} />
    </Switch>
  );
}

export default App;
