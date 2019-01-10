import React, { Component } from 'react';
// import { clients } from '../fakeData';

class FluidInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      checkIns: [],
      courtDates: [],
      selectedClient: {}
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  //   componentDidMount() {
  //     console.log("I'm going to be an API that hits court dates ");
  //   }

  handleClick = () => {};
  //Current goal here to map through an array of clients. This should render an individual card per name. These cards should have a click function attached to each that will allow the case manager to get information specifically tied to client they clicked on.
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <h1 style={{ textAlign: 'center' }}>Client Information</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <h4>{this.state.selectedClient.name}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FluidInfo;
