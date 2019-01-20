import React from 'react';

const NavLogin = props => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      {/* <a className="navbar-brand" href="#">
        <img src="/logo.PNG" width="55" height="55" alt="PCM" />
      </a> */}
      <a className="navbar-brand" href="/dash">
        Dashboard
      </a>
      <a className="navbar-brand" href="/connect">
        Connect
      </a>
      {/* <a className="navbar-brand" href="/login">
        Logout
      </a> */}
    </nav>
  </div>
);

export default NavLogin;
