import React from 'react';
import PropTypes from 'prop-types';

import trash from '../assets/trash.svg';

import starWarLogo from '../assets/star-war-logo.svg';

const Navbar = props => (
  <>
    <nav className="navbar navbar-light bg-warning">
      <img
        className="navbar-brand"
        src={starWarLogo}
        width="120"
        height="120"
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
          Favorites {props.favoriteList.length}
        </button>

        <div className="dropdown-menu dropdown-menu-right p-0 b-0 m-0">
          <ul className="list-group-item p-0 b-0 m-0">
            {props.favoriteList.length ? (
              props.favoriteList.map((favoriteEl, idx) => (
                <li
                  className={
                    'list-group-item d-flex ' +
                    'justify-content-between align-items-center'
                  }
                  key={idx}
                >
                  {favoriteEl.name}
                  <img
                    style={styles.removeFromFavorite}
                    src={trash}
                    alt="delete favorite"
                    onClick={() =>
                      favoriteEl.type === 'character'
                        ? props.toggleCharacterFavorite(favoriteEl.idx)
                        : favoriteEl.type === 'planet'
                        ? props.togglePlanetFavorite(favoriteEl.idx)
                        : null
                    }
                  />
                </li>
              ))
            ) : (
              <li className="list-group-item d-flex">(empty)</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
);

const styles = {
  removeFromFavorite: {
    cursor: 'pointer'
  }
};

Navbar.propTypes = {
  favoriteList: PropTypes.arrayOf(PropTypes.object),
  toggleCharacterFavorite: PropTypes.func.isRequired,
  togglePlanetFavorite: PropTypes.func.isRequired
};

export default Navbar;
