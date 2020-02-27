import React from 'react';
import PropTypes from 'prop-types';

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

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary">Learn More</button>

        <button
          className="btn btn-outline-warning"
          onClick={() => props.setCharacterFavorite(props.idx)}
        >
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
  idx: PropTypes.number.isRequired,
  name: PropTypes.string,
  gender: PropTypes.string,
  hairColor: PropTypes.string,
  eyeColor: PropTypes.string,
  setCharacterFavorite: PropTypes.func.isRequired
};

export default CharacterCard;
