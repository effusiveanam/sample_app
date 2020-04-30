/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserComponent from './citiMock';
import App from './App';
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/citi" component={UserComponent} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
