import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../containers/App';
import Help from '../components/Help';

export default function Main() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App} />
      <Route path="/help" component={Help} />
    </Router>
  );
}

