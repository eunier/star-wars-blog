import React from 'react';

import starWarLogo from '../assets/star-war-logo.svg';

const Navbar = () => (
  <>
    <nav className="navbar navbar-light bg-light">
      <img
        className="navbar-brand"
        src={starWarLogo}
        width="40"
        height="40"
        alt="star war logo"
      />
    </nav>
  </>
);

export default Navbar;
