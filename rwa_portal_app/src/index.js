import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import LoginForm from './components/LoginForm';
import RwaApp from './components/RwaApp';

//let store = createStore(info)

const router = (
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
      <IndexRoute component={LoginForm}></IndexRoute>
      <Route path="/RwaApp" component={RwaApp}>
      </Route>
    </Route>
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));




