import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Show from './containers/Show'
import Profile from './containers/Profile'
import Discussions from './containers/Discussions'
import Discussion from './containers/Discussion'

import './assets/index.css';
import './assets/slider.css';

render((
  <Router history={browserHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="profile" component={Profile} />
      <Route path="shows/:id" component={Show} />
      <Route path="discussions" component={Discussions} />
      <Route path="discussions/:id" component={Discussion} />
    </Route>
  </Router>
), document.getElementById('root'));
