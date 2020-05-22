import React from "react";
import FrontPage from "./components/pages/FrontPage/container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" exact={true} component={FrontPage} />
        <Route path="*" exact={true} component={FrontPage} />
      </Switch>
    </Router>
  );
}

export default App;
