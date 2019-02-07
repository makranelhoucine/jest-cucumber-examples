import * as React from 'react';
import NotFound from './layout/NotFound';
import { Switch, Route } from 'react-router';

export default () => (
  <Switch>
    <Route component={NotFound} />
  </Switch>
);
