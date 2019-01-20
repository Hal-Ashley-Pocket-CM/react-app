import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Messaging from '../pages/ClientConnect';
import { Switch, Route } from 'react-router';
const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={Landing}/> */}
      <Route path="/login" component={Login} />
      <Route path="/dash" component={Dashboard} />
      <Route path="/connect" component={Messaging} />
      <Route path="/connect" component={Messaging} />
    </Switch>
  </main>
);

export default Main;
