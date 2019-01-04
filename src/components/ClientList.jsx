import React, { Component } from 'react';
import { clients } from '../fakeData';
class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("i'm loaded here");
  }

  handleClick = () => {
    console.log('Clicked on a client name');
  };
//Current goal here to map through an array of clients. This should render an individual card per name. These cards should have a click function attached to each that will allow the case manager to get information specifically tied to client they clicked on.
  render() {
    return (
      <div className="col-md-2" style={{ textAlign: 'left' }}>
        const clientList = clients.map((client) => (
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              key={id}
              id={clients.}
              class="list-group-item"
              onClick={this.handleClick}
            >
              {this.state.clients}
            </li>
          </ul>
        </div>
        ));
      </div>
    );
  }
}
export default ClientList;
