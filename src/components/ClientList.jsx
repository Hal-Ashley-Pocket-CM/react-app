import React, { Component } from 'react';
import { clients } from '../fakeData';
import NameCard from './NameCard';
import CheckIn from './CheckIn';
import './clientList.css';
class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients,
      selectedClient: {},
      id: 0,
      name: '',
      phone: '',
      checkIns: [],
      checkIn: {},
      courtDates: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectCheckIn = this.handleSelectCheckIn.bind(this);
    // this.displayData = this.displayData.bind(this);
  }
  componentDidMount() {
    console.log("i'm loaded here");
  }

  handleSelectCheckIn = id => {
    console.log(this.state.id);
    console.log(this.state.checkIn);
  };

  handleClick = (id, name, phone, checkIns) => {
    // add checkins the array of objects to this selected Client object. Then display the array of checkins showing each check in as a list item
    this.setState({
      selectedClient: { id: id, name: name, phone: phone, checkIns: checkIns }
    });
    // let client = this.state.selectedClient;
  };

  componentDidUpdate() {
    let client = this.state.selectedClient;
    console.log(client);
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
                  // console.log(clients);
                  return (
                    <NameCard
                      id={clients.client.id}
                      key={clients.client.id}
                      name={clients.client.name}
                      phone={clients.client.phone}
                      checkIns={clients.client.checkIns}
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

              <div
                className="row"
                style={{ textAlign: 'left', marginLeft: '50px' }}
              >
                <div className="col-md-6">
                  <h5>ID: {this.state.selectedClient.id}</h5>
                  <h5>Name: {this.state.selectedClient.name}</h5>
                  <h5>Phone: {this.state.selectedClient.phone}</h5>
                  <h5>Court Dates: </h5>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <h4
                        style={{
                          textAlign: 'center',
                          textDecoration: 'underline'
                        }}
                      >
                        Pretrial Check Ins
                      </h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      {/* <ul>
                        {this.state.selectedClient.checkIns.map(checkIn => {
                          console.log(checkIn);
                          return (
                            <CheckIn
                              id={checkIn.id}
                              key={checkIn.id}
                              lattitude={checkIn.lattitude}
                              longitude={checkIn.longitude}
                              handleSelectCheckIn={this.handleSelectCheckIn}
                            />
                          );
                        })}
                      </ul> */}
                    </div>
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
