import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dash" component={Dashboard} />
          {/* <Route exact path="/saved/notes" component={Saved} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
