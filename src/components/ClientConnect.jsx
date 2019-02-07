import React, { Component } from 'react';
import { clients, convoData } from '../fakeData';
import NameCard from './NameCard';
import MassMessage from './MassMessage';
class ClientConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients,
      convoData: convoData,
      text: '',
      id: 0,
      phone: '',
      name: '', //client name
      caseManager: '', //case manager name
      messages: [], // this will be an array of objects including dates/times/message strings
      selectedClient: {},
      convoData: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitNow = this.handleSubmitNow.bind(this);
    this.handleSubmitLater = this.handleSubmitLater.bind(this);
  }
  componentDidMount() {
    console.log("I'm going to be an API that hits court dates ");
  }

  handleClick = (id, name, phone) => {
    console.log('clicked: ', id, name, phone);
    // let phone = this.clients.phone;
    this.setState({ selectedClient: { name: name, id: id, phone: phone } });
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmitNow = text => {
    console.log('handle submit now selected');
    console.log(this.state.text);
  };
  handleSubmitLater = text => {
    console.log('handle submit later selected');
    console.log(this.state.text);
  };
  //Current goal here to map through an array of clients. This should render an individual card per name. These cards should have a click function attached to each that will allow the case manager to get information specifically tied to client they clicked on.
  render() {
    return (
      <div>
        <MassMessage />
        <div className="row">
          <div
            className="col-md-2"
            style={{
              marginTop: '15px',
              marginLeft: '15px'
            }}
          >
            <div id="clientButtons" className="card">
              <ul id="listBackdrop" className="list-group list-group-flush">
                {this.state.clients.map(clients => {
                  return (
                    <NameCard
                      id={clients.client.id}
                      key={clients.client.id}
                      name={clients.client.name}
                      phone={clients.client.phone}
                      handleClick={this.handleClick}
                    />
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-md-1" />

          <div
            id="messagesBox"
            className="col-md-8"
            style={{ marginTop: '15px' }}
          >
            <div className="card">
              <div className="row">
                <div className="col-md-12">
                  <h1 style={{ textAlign: 'center' }}>Client Connect</h1>
                </div>
              </div>

              <div
                className="row"
                style={{ textAlign: 'right', margin: '10px' }}
              >
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="All Clients"
                  >
                    Mass Message
                  </button>
                </div>
              </div>

              <div id="" className="row">
                <div className="col-md-12">
                  <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                    <h4>{this.state.selectedClient.name}</h4>
                    <h4>{this.state.selectedClient.phone}</h4>
                  </div>
                </div>
              </div>

              <div id="convoLocation" className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                  <div>{convoData}</div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="input-group">
                    <textarea
                      type="text"
                      className="form-control font-weight-bold text-wrap"
                      aria-label="Start typing here..."
                      value={this.state.text}
                      onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-success dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Send
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={this.handleSubmitNow}
                        >
                          Send Now
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={this.handleSubmitLater}
                        >
                          Send Later
                        </a>
                      </div>
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
export default ClientConnect;
