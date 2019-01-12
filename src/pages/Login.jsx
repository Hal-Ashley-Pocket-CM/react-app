import React, { Component } from 'react';
import NavLogin from '../components/NavLogin';
import './login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordState: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('form was submitted');
  // }

  render() {
    return (
      <div id="login">
        <NavLogin />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div
              className="card dark bg-dark"
              style={{ textAlign: 'center', marginTop: '50%' }}
            >
              <h3 style={{ color: 'white' }}>Welcome to PCM</h3>
              <h6 style={{ color: 'white' }}>Lets get started</h6>
              <form
                onSubmit={this.handleSubmit}
                style={{ textAlign: 'left', margin: '25px' }}
              >
                <div class="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ color: 'white' }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    required*
                  </small>
                </div>
                <div class="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: 'white' }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    required*
                  </small>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <button type="submit" class="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}
export default Login;
