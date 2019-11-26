import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Step1 from './pages/Step1';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/step01" component={Step1} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
