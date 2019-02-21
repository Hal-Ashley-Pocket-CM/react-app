import React, { Component } from 'react';
import { clients, convoData } from '../fakeData';
import NameCard from './NameCard';
import MassMessage from './MassMessage';
// import CalendarModal from './CalendarModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
class ClientConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: clients,
      convoData: [],
      text: '',
      id: 0,
      phone: '',
      name: '', //client name
      caseManager: '', //case manager name
      messages: [], // this will be an array of objects including dates/times/message strings
      selectedClient: {},
      convoData: [],
      startDate: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNow = this.handleSubmitNow.bind(this);
    this.handleSubmitLater = this.handleSubmitLater.bind(this);
  }
  componentDidMount() {
    console.log('API that gets court dates');
  }

  handleClick = (id, name, phone, messages) => {
    console.log('clicked: ', id, name, phone);
    // let phone = this.clients.phone;
    this.setState({
      selectedClient: { name: name, id: id, phone: phone }
    });
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    // console.log(main.format('L'));
    console.log('Send message on this date and time: ', main);
    alert('Your message was scheduled!');
  }

  handleSubmitNow = text => {
    console.log('handle submit now selected');
    if (this.state.text) {
      console.log(this.state.text);
    }
    this.setState({ text: '' });
  };
  handleSubmitLater = text => {
    console.log('handle submit later selected');
    if (this.state.text) {
      console.log(this.state.text);
    }
    this.setState({ text: '' });
  };
  //Current goal here to map through an array of clients. This should render an individual card per name. These cards should have a click function attached to each that will allow the case manager to get information specifically tied to client they clicked on.
  render() {
    return (
      <div>
        <MassMessage />
        {/* <CalendarModal /> */}
        <div className="row">
          <div
            className="col-md-2"
            style={{
              marginTop: '15px',
              marginLeft: '15px'
            }}
          >
            <h1>My Clients</h1>
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
            style={{ marginTop: '5%' }}
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
                  <div>{this.state.convoData}</div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="input-group">
                    <textarea
                      id="message"
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
                          data-toggle="modal"
                          data-target="#calendarModal"
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
        <div
          className="modal fade"
          id="calendarModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="calendarModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="calendarModalLabel">
                  Select a Date & Time for sending
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  {/* <label>Send Message: </label> */}
                  <DatePicker
                    // openToDate={new Date()}
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    showTimeSelect
                    // dateFormat="MMMM d, yyyy h:mm aa"
                    dateFormat="Pp"
                    name="sendDate"
                  />

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-success"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target="#calendarModal"
                    >
                      Schedule Message
                    </button>
                  </div>
                </form>
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
