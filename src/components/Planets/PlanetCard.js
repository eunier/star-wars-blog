import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../assets/heart.svg';
import heartOutline from '../../assets/heart-outline.svg';

const PlanetCard = props => (
  <div className="card mr-3" style={styles.card}>
    <div className="card-img-top" style={styles.images} />

    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>

      <div className="card-text">
        <p>Hair Color: {props.population}</p>
        <p>Gender: {props.terrain}</p>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary">Learn More</button>

        <button
          className="btn btn-outline-warning"
          onClick={() => props.setPlanetFavorite(props.idx)}
        >
          <img src={props.isFavorite ? heart : heartOutline} alt="like" />
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
  name: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  setPlanetFavorite: PropTypes.func.isRequired
};

export default PlanetCard;
