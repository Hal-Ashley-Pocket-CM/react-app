import React from 'react';

const Footer = props => (
  <div>
    <nav
      className="navbar navbar-light bg-light"
      style={{
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        marginTop: '5%'
      }}
    >
      <a className="navbar-brand" href="#">
        <img
          src="/docs/4.2/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt="PCM"
        />
      </a>
      <small>H&A copyright</small>
    </nav>
  </div>
);

export default Footer;
