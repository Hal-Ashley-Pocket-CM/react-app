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
    // this.change = this.change.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // change(e, name) {
  //   e.preventDefault();
  //   this.setState({ name: e.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('form was submitted');
  // }

  render() {
    return (
      <div id="login">
        <Nav />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-4 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      // readonly
                      className="form-control-plaintext"
                      id="staticEmail"
                      name="email"
                      // value={this.state.email}
                      // onChange={this.change}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-4 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      name="password"
                      // value={this.state.password}
                      // onChange={this.change(e, 'password')}
                    />
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleSubmit}
                  >
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
