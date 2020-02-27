import React from 'react';
import PropTypes from 'prop-types';

import starWarLogo from '../assets/star-war-logo.svg';

const Navbar = props => (
  <>
    <nav className="navbar navbar-light bg-light">
      <img
        className="navbar-brand"
        src={starWarLogo}
        width="40"
        height="40"
        alt="star war logo"
      />

      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Favorites
        </button>

        <div className="dropdown-menu dropdown-menu-right p-0 b-0 m-0">
          <ul className="list-group-item p-0 b-0 m-0">
            {props.favoritesList.map((favoriteEl, idx) => (
              <li className="list-group-item" id={idx}>
                {favoriteEl}
              </li>
            ))}
          </ul>

          {/* <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Separated link
          </a> */}
        </div>
      </div>
    </nav>
  </>
);

Navbar.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
