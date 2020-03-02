import React from 'react';
import PropTypes from 'prop-types';

import PlanetCard from './PlanetCard';

const Planets = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-white mt-3 mb-3">Planets</h3>
        </div>
      </div>

      <div className="row">
        <div className="d-flex flex-col flex-nowrap overflow-auto">
          {props.planets.map((planet, idx) => (
            <PlanetCard
              key={idx}
              planet={planet}
              togglePlanetFavorite={props.togglePlanetFavorite}
              setDetailsData={props.setDetailsData}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

Planets.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object),
  togglePlanetFavorite: PropTypes.func.isRequired,
  setDetailsData: PropTypes.func.isRequired
};

export default Planets;
