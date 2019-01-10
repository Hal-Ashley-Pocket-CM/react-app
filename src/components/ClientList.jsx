import React, { Component } from 'react';
import { clients } from '../fakeData';
import NameCard from './NameCard';
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
      <div
        id="sidebar"
        className="col-md-3"
        style={{ textAlign: 'left', marginTop: '15px' }}
      >
        <div className="card">
          <ul className="list-group list-group-flush">
            {this.state.clients.map(clients => {
              return (
                <NameCard
                  id={clients.id}
                  key={clients.id}
                  name={clients.name}
                  handleClick={this.handleClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default ClientList;
