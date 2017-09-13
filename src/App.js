import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Home from './containers/Home'

class App extends Component {
  render() {
    return <div>
        <Navigation />

        <Home />
      </div>;
  }
}

export default App;





