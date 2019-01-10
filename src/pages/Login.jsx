import React, { Component } from 'react';
import Nav from '../components/Navbar';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordState: ''
    };
    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change() {
    console.log('I got to change function');
  }

  handleSubmit() {
    console.log('form was submitted');
  }

  render() {
    return (
      <div id="login">
        <Nav />
        <div className="col-md-6">
          <div className="card">
            <div className="dropdown-menu">
              <form className="px-4 py-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck"
                  />
                  <label className="form-check-label" htmlFor="dropdownCheck">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                New around here? Sign up
              </a>
              <a className="dropdown-item" href="#">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
