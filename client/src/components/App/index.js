import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home";
import * as routes from "../../constants/routes";
import NotFound from "../NotFound";
import Login from "../Login";
import Signup from "../Signup";
import Navigation from "../Navigation";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />

        <header className="App-header">
          <Switch>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.SIGN_UP} component={() => <Signup />} />
            <Route exact path={routes.LOGIN} component={() => <Login />} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
