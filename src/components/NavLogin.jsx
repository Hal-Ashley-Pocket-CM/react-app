import React from 'react';

const NavLogin = props => (
  <div>
    <nav
      className="navbar navbar-dark bg-dark"
      style={{
        textShadow: '2px 2px 4px #000000',
        boxShadow: '0 2px 6px 0 #808080'
      }}
    >
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
