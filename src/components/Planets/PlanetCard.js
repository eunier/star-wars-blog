import React from 'react';
import PropsTypes from 'prop-types';

const PlanetCard = props => (
  <div className="card mr-3" style={{ minWidth: '20rem' }}>
    <div className="card-img-top" style={styles.images} />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>

      <div className="card-text">
        <p>Hair Color: {props.population}</p>
        <p>Gender: {props.terrain}</p>
      </div>

      <a href="/" className="btn btn-outline-primary">
        Learn More
      </a>
    </div>
  </div>
);

PlanetCard.propTypes = {
  name: PropsTypes.string,
  population: PropsTypes.string,
  terrain: PropsTypes.string
};

const styles = {
  images: {
    minHeight: '10rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

export default PlanetCard;
