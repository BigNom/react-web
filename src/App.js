import React, { Component } from 'react';
import StartNav from './components/Navigation/StartNav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home'
import Develop from './containers/Develop'
import Design from './containers/Design'


class App extends Component {
  render() {
    return <div>
        <Router>
          <div>
            <StartNav />
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/develop" component={Develop} />
              <Route path="/design" component={Design} />
              <Route render={function() {
                  return <p>Not Found</p>;
                }} />
            </Switch>
            </div>
        </Router>;
      </div>;
  }
}

export default App;





