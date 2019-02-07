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
      // selectedClient: {
      //   id: '',
      //   name: '',
      //   phone: '',
      //   checkIns: ['None Yet']
      // },
      selectedClient: {},
      id: 0,
      name: '',
      phone: '',
      checkIns: [],
      // checkIn: {},
      courtDates: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectCheckIn = this.handleSelectCheckIn.bind(this);
    // this.displayData = this.displayData.bind(this);

    const sortedClients = []
      .concat(this.state.clients)
      .sort((a, b) => a.itemM > b.itemM);
  }
  componentDidMount() {
    console.log("i'm loaded here");

    const sortedClients = []
      .concat(this.state.clients)
      .sort((a, b) => a.client.name > b.itemM);
    console.log(sortedClients);
    // .map((item, i) => (
    //   <div key={i}>
    //     {' '}
    //     {item.matchID} {item.timeM}
    //     {item.description}
    //   </div>
    // ));

    var obj = [...this.state.clients];
    obj.sort((a, b) => a.timeM - b.timeM);
    obj.map((item, i) => (
      <div key={i}>
        {' '}
        {item.matchID}
        {item.timeM} {item.description}
      </div>
    ));
  }

  handleSelectCheckIn = (id, checkIn) => {
    console.log(id);
    console.log(checkIn);
  };

  handleClick = (id, name, phone, checkIns) => {
    // add checkins the array of objects to this selected Client object. Then display the array of checkins showing each check in as a list item
    this.setState({
      selectedClient: { id: id, name: name, phone: phone, checkIns: checkIns }
    });
  };

  componentDidUpdate() {
    let client = this.state.selectedClient;
    // console.log(client);
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
            <h1>My Clients</h1>
            <div id="border" className="card">
              <ul id="listBackdrop" className="list-group list-group-flush">
                {this.state.clients.map(clients => {
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

          {/* <div className="row">
            <div className="col-md-12">
              <h1 style={{ textAlign: 'center' }}>Client Information</h1>
            </div>
          </div> */}

          <div id="fluidBox" className="col-md-8" style={{ marginTop: '10%' }}>
            <div className="card">
              {/* <div className="row">
                <div className="col-md-12">
                  <h1 style={{ textAlign: 'center' }}>Client Information</h1>
                </div>
              </div> */}

              <div
                className="row"
                style={{ textAlign: 'left', marginLeft: '10%' }}
              >
                <div className="col-md-6">
                  <h3
                    style={{
                      textAlign: 'center'
                    }}
                  >
                    Client
                  </h3>
                  <h5>Client e-track #: {this.state.selectedClient.id}</h5>
                  <h5>Name: {this.state.selectedClient.name}</h5>
                  <h5>Phone: {this.state.selectedClient.phone}</h5>
                  <h5>Court Dates: </h5>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <div className="row" style={{ textAlign: 'center' }}>
                        <h3>Pretrial</h3>
                        <img
                          style={{ width: '10%', height: '10%' }}
                          src="../Location_Tag_Point-512.png"
                          alt="Check-in Image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        {this.state.selectedClient.checkIns ? (
                          this.state.selectedClient.checkIns.map(checkIn => {
                            return (
                              <CheckIn
                                id={checkIn.id}
                                key={checkIn.id}
                                checkIn={checkIn}
                                handleSelectCheckIn={this.handleSelectCheckIn}
                              />
                            );
                          })
                        ) : (
                          <p />
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default ClientList;
