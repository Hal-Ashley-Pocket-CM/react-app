import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Messaging from '../pages/ClientConnect';
import Profile from '../pages/Profile';
import { Switch, Route } from 'react-router';
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dash" component={Dashboard} />
      <Route path="/connect" component={Messaging} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </main>
);

export default Main;
