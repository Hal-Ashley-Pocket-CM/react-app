import React, { Component } from 'react';
import { clients } from '../fakeData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//In this file the goal is to get all clients and allow the user to select some or all of the clients to send this mass message to.
class MassMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selectAll: false,
      checked: false,
      names: [],
      allClients: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNow = this.handleSubmitNow.bind(this);
    this.handleSubmitLater = this.handleSubmitLater.bind(this);
  }
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
  handleClientChange(e, names) {
    // const name = e.target.name;
    // const isChecked = e.target.checked;
    // this.setState({
    //   clients: name,
    //   isChecked
    // });

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      names: names
    });
  }

  handleInputChange(event, all) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      allClients: all
    });
  }

  componentDidUpdate() {
    console.log('select all status: ', this.state.selectAll);
    console.log('Individual clients selected', this.state.client);
  }

  render() {
    return (
      <div>
        {/* <CalendarModal /> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New message
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
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Select Clients:
                    </label>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            name="selectAll"
                            value={clients}
                            checked={this.state.selectAll}
                            onChange={this.handleInputChange}
                            aria-label="Checkbox for following text input"
                          />
                        </div>
                        <label style={{ marginLeft: '12px' }}>Select All</label>
                      </div>
                    </div>
                    {clients
                      .sort((a, b) =>
                        a.client.name.localeCompare(b.client.name)
                      )
                      .map((clients, i) => (
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <input
                                id={clients.id}
                                key={clients.key}
                                type="checkbox"
                                name={clients.client.name}
                                checked={this.state.name}
                                onChange={this.handleClientChange}
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                          </div>

                          <p
                            id={i}
                            key={i}
                            type="name"
                            name="client"
                            value={clients.client}
                            onChange={this.handleClientChange}
                            phone={clients.client.phone}
                            className="form-control"
                          >
                            {clients.client.name}
                          </p>
                        </div>
                      ))}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="massMessage"
                      type="text"
                      className="form-control font-weight-bold text-wrap"
                      aria-label="Start typing here..."
                      value={this.state.text}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Send message
                </button>
                <div className="dropdown-menu" data-dismiss="modal">
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
      </div>
    );
  }
}

export default MassMessage;
