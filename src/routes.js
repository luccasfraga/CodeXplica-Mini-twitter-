import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step3 from './pages/Step3';
import Step5 from './pages/Step5';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/step01" component={Step1} />
        {/* <Route path="/step02" component={Step2} /> */}
        <Route path="/step03" component={Step3} />
        {/* <Route path="/step04" component={Step4} /> */}
        <Route path="/step05" component={Step5} />
        {/* <Route path="/step06" component={Step6} /> */}
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
