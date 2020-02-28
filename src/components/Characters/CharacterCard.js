import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../assets/heart.svg';
import heartOutline from '../../assets/heart-outline.svg';

const CharacterCard = props => (
  <div className="card mr-3" style={styles.card}>
    <div className="card-img-top" style={styles.cardImageTop} />

    <div className="card-body">
      <h5 className="card-title">{props.character.name}</h5>

      <div className="card-text">
        <p>Gender: {props.character.gender}</p>
        <p>Hair Color: {props.character.hairColor}</p>
        <p>Eye Color: {props.character.eyeColor}</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-primary"
          onClick={() => props.setDetailsData(props.character)}
        >
          Learn More
        </button>

        <button
          className="btn btn-outline-warning"
          onClick={() => props.toggleCharacterFavorite(props.idx)}
        >
          <img
            src={props.character.isFavorite ? heart : heartOutline}
            alt="like"
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
  cardImageTop: {
    minHeight: '10rem',
    minWidth: '20rem',
    background: '#ccc'
  }
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  toggleCharacterFavorite: PropTypes.func.isRequired,
  setDetailsData: PropTypes.func.isRequired
};

export default CharacterCard;
