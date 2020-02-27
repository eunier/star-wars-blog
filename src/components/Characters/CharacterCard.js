import React from 'react';
import PropsTypes from 'prop-types';

import heartOutline from '../../assets/heart-outline.svg';

const CharacterCard = props => (
  <div className="card mr-3" style={styles.card}>
    <div className="card-img-top" style={styles.cardImageTop} />

    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>

      <div className="card-text">
        <p>Gender: {props.gender}</p>
        <p>Hair Color: {props.hairColor}</p>
        <p>Eye Color: {props.eyeColor}</p>
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
  cardImageTop: {
    minHeight: '10rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

CharacterCard.propTypes = {
  name: PropsTypes.string,
  gender: PropsTypes.string,
  hairColor: PropsTypes.string,
  eyeColor: PropsTypes.string
};

export default CharacterCard;
