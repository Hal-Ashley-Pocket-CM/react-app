import React, { Component } from 'react';
import { clients } from '../fakeData';
import NameCard from './NameCard';
import './clientList.css';
class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients,
      selectedClient: {},
      id: 0,
      name: '',
      checkIns: [],
      courtDates: []
    };
    this.handleClick = this.handleClick.bind(this);
    // this.displayData = this.displayData.bind(this);
  }
  componentDidMount() {
    console.log("i'm loaded here");
  }

  handleClick = (id, name) => {
    // console.log('Clicked on a client', id, name);
    this.setState({ selectedClient: { id: id, name: name } });
    let client = this.state.selectedClient;
    // this.displayData(client);
  };

  // async displayData(client) {
  //   await this.componentDidUpdate();
  //   // console.log(client);
  // }
  componentDidUpdate() {
    // console.log(this.state.selectedClient);
    //should I get all data when the page loads or upon request after each click?
  }
  //Current goal here to map through an array of clients. This should render an individual card per name. These cards should have a click function attached to each that will allow the case manager to get information specifically tied to client they clicked on.
  render() {
    return (
      <div>
        <div className="row">
          <div
            className="col-md-2"
            style={{ textAlign: 'left', marginTop: '15px', marginLeft: '15px' }}
          >
            <div id="border" className="card">
              <ul id="listBackdrop" className="list-group list-group-flush">
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
          <div className="col-md-1" />

          <div id="fluidBox" className="col-md-8" style={{ marginTop: '15px' }}>
            <div className="card">
              <div className="row">
                <div className="col-md-12">
                  <h1 style={{ textAlign: 'center' }}>Client Information</h1>
                </div>
              </div>

              <div className="row" style={{ alignItems: 'center' }}>
                <div className="col-md-6">
                  <div className="card">
                    <h5>ID: {this.state.selectedClient.id}</h5>
                    <h5>Name: {this.state.selectedClient.name}</h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card">
                    <h5>ID: {this.state.selectedClient.id}</h5>
                    <h5>Name: {this.state.selectedClient.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClientList;
