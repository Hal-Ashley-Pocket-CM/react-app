import React, { Component } from 'react';
import Nav from '../components/Navbar';
import ClientList from '../components/ClientList';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div id="dash" class="">
        <Nav />

        {/* <ClientList /> */}
      </div>
    );
  }
}

export default Dashboard;