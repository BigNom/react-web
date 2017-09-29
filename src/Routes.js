import React from "react";
import { Route, Switch } from "react-router-dom";

/* Import the components */
import Home from "./containers/Home/";
import Design from "./containers/Design/";
import Develop from "./containers/Develop/";


export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/design" exact component={Design} />
    <Route path="/develop" exact component={Develop} />

  </Switch>
);
