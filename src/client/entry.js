import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes';


React.render(
  <Router history={createBrowserHistory()}>
    {routes}
  </Router>, document.getElementById('app')
)
