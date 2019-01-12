import React, { Component } from 'react';
import { clients } from '../fakeData';
import NameCard from './NameCard';
class ClientConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients,
      text: '',
      id: 0,
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

  handleClick = (id, name) => {
    console.log('clicked: ', id, name);
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
        <div className="row">
          <div
            className="col-md-2"
            style={{ textAlign: 'left', marginTop: '15px', marginLeft: '15px' }}
          >
            <div className="card">
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
                  <button type="button" className="btn btn-success">
                    Mass Message
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div>{this.state.convoData}</div>
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
      </div>
    );
  }
}
export default ClientConnect;
