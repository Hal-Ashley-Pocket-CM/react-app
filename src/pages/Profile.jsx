import React, { Component } from 'react';
import Nav from '../components/Navbar';
import './profile.css';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseManager: {},
      password: 'Ilovecoffee22',
      username: 'ajimenez@slco.org'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Profile update submitted');
    console.log('info submitted', this.state.username, this.state.password);
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
            <div
              className="card mx-auto"
              style={{
                width: '18rem',
                marginTop: '5%',

                boxShadow: '3px 3px 6px 3px #2E8B57'
              }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h3
                      id="title"
                      //   style={{ textShadow: '2px 2px 4px #000000' }}
                    >
                      Case Manager Profile
                    </h3>
                  </div>
                </div>

                <h5 id="profile" className="card-title">
                  Profile
                </h5>
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <label>Username</label>
                  <input
                    aria-label="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    style={{ borderWidth: '3px' }}
                  />
                  <label>Password</label>
                  <input
                    aria-label="Password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    style={{ borderWidth: '3px' }}
                  />
                  <div
                    className="col-md-12"
                    style={{ textAlign: 'right', marginTop: '5%' }}
                  >
                    <button type="submit" className="btn btn-outline-success">
                      Update
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

export default Profile;
