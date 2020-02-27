import React from 'react';
import PropsTypes from 'prop-types';

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

      <div className=" d-flex justify-content-between">
        <button className="btn btn-outline-primary">Learn More</button>

        <button className="btn btn-outline-warning">
          <img src={heartOutline} alt="like" />
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
  name: PropsTypes.string,
  population: PropsTypes.string,
  terrain: PropsTypes.string
};

export default PlanetCard;
