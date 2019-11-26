import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import React from 'react';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={() => <h1>oie</h1>} />
      </Switch>
    </BrowserRouter>
  );
}