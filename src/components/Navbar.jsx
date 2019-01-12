import React from 'react';

const Nav = props => (
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
      <a className="navbar-brand" href="/connect">
        Profile
      </a>
      <a className="navbar-brand" href="/login">
        Logout
      </a>
    </nav>
  </div>
);

export default Nav;
