import React, { Component } from 'react';
import Nav from '../components/Navbar';
import ClientList from '../components/ClientList';
import './login.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedClient: {} };
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div id="dash" className="dashboard">
        <Nav />
        <ClientList />
      </div>
    );
  }
}

export default Dashboard;
