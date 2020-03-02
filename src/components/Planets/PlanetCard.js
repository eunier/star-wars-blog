import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../assets/heart.svg';
import heartOutline from '../../assets/heart-outline.svg';

const PlanetCard = props => (
  <div className="card mr-3 ml-3" style={styles.card}>
    <div className="card-img-top" style={styles.images}>
      <img
        src="https://media.timeout.com/images/103670273/320/210/image.jpg"
        alt="planets"
      />
    </div>

    <div className="card-body">
      <h5 className="card-title">{props.planet.name}</h5>

      <div className="card-text">
        <p>Population: {props.planet.population}</p>
        <p>Terrain: {props.planet.terrain}</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            props.setDetailsData(() => {
              const newDetailsData = props.planet;

              delete newDetailsData.idx;
              delete newDetailsData.isFavorite;

              return newDetailsData;
            })
          }
        >
          Details
        </button>

        <button
          className="btn btn-outline-warning"
          onClick={() => props.togglePlanetFavorite(props.planet.idx)}
        >
          <img
            src={props.planet.isFavorite ? heart : heartOutline}
            alt="add to favorites"
          />
        </button>
      </div>
    </div>
  </div>
);

const styles = {
  card: {
    minWidth: '20rem'
  },
  images: {
    minHeight: '10rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

PlanetCard.propTypes = {
  planet: PropTypes.object.isRequired,
  togglePlanetFavorite: PropTypes.func.isRequired,
  setDetailsData: PropTypes.func.isRequired
};

export default PlanetCard;
