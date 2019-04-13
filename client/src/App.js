import React, { Component } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Messaging from './pages/ClientConnect';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dash" component={Dashboard} />
            <Route path="/connect" component={Messaging} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
