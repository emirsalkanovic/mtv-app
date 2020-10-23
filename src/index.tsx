import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import confugureStore from './config/store'; 

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const store = confugureStore();

const routing = (
  <Provider store={store}>
    <Router>
      <div className='appMainContainer'>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
