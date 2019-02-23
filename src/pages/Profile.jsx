import React, { Component } from 'react';
import Nav from '../components/Navbar';
import './profile.css';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseManager: {},
      password: '',
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Profile update submitted');
    // console.log(this.state.email);
    // console.log(this.state.password);
  }
  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div id="profile" className="profile">
        <Nav />
        <div className="row">
          <div className="col-md-12">
            <h3 id="title">Case Manager Profile</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <form onSubmit={this.handleSubmit}>
                  <label className="card-text">Username</label>
                  <input
                    aria-label="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label className="card-text">Password</label>
                  <input
                    aria-label="Password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                  <a className="btn btn-outline-success">Update</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
