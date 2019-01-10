import React, { Component } from 'react';
import Nav from '../components/Navbar';
import ClientConnect from '../components/ClientConnect';

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedClient: {} };
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div id="dash" className="dashboard">
        <Nav />
        <ClientConnect />
      </div>
    );
  }
}

export default Messaging;