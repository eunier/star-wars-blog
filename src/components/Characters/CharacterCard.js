import React from 'react';
import PropsTypes from 'prop-types';

const CharacterCard = props => (
  <div className="card mr-3" style={{ minWidth: '20rem' }}>
    <div className="card-img-top" style={styles.images} />
    
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>

      <div className="card-text">
        <p>Gender: {props.gender}</p>
        <p>Hair Color: {props.hairColor}</p>
        <p>Eye Color: {props.eyeColor}</p>
      </div>

      <a href="/" className="btn btn-outline-primary">
        Learn More
      </a>
    </div>
  </div>
);

CharacterCard.propTypes = {
  name: PropsTypes.string,
  gender: PropsTypes.string,
  hairColor: PropsTypes.string,
  eyeColor: PropsTypes.string
};

const styles = {
  images: {
    minHeight: '10rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

export default CharacterCard;
