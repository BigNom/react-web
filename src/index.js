import React from 'react';
import { render } from 'react-snapshot'
import { BrowserRouter as Router} from 'react-router-dom'
//import './index.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/css/new-age.css'
import './assets/vendor/font-awesome/css/font-awesome.css'
import './assets/vendor/simple-line-icons/css/simple-line-icons.css'
//import './assets/vendor/jquery/jquery.js'
//import './assets/vendor/bootstrap/js/bootstrap.bundle.js'
//import './assets/vendor/jquery-easing/jquery.easing.js'
//import './assets/js/new-age.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

