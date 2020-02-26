import React from 'react';

import starWarLogo from '../assets/star-war-logo.svg';

const Navbar = () => (
  <>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        <img src={starWarLogo} width="40" height="40" alt="star war logo" />
      </a>
    </nav>
  </>
);

export default Navbar;
