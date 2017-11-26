import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
//import './index.css'
import './containers/new-age.css'
import './containers/device-mockups.css'
import './containers/bootstrap.css'

//import './assets/vendor/jquery/jquery.js'
//import './assets/vendor/bootstrap/js/bootstrap.bundle.js'
//import './assets/vendor/jquery-easing/jquery.easing.js'
//import './assets/js/new-age.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

