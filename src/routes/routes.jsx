import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { Switch, Route } from 'react-router';
const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={Landing}/> */}
      <Route path="/Login" component={Login} />
      <Route path="/dash" component={Dashboard} />
    </Switch>
  </main>
);

export default Main;
