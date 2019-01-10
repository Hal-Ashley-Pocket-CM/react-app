import React from 'react';

const Nav = props => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {/* <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="Pocket Case Manager"> */}
      </a>
      <a className="navbar-brand" href="dash">
        Dashboard
      </a>
      <a className="navbar-brand" href="/connect">
        Connect
      </a>
      <a className="navbar-brand" href="/login">
        Logout
      </a>
    </nav>
  </div>
);

export default Nav;
