import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../assets/heart.svg';
import heartOutline from '../../assets/heart-outline.svg';

const CharacterCard = props => (
  <div className="card mr-3 ml-3" style={styles.card}>
    <div className="card-img-top" style={styles.cardImageTop}>
      <img
        src="https://media.timeout.com/images/103670273/320/210/image.jpg"
        alt="character"
      />
    </div>

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
          onClick={() =>
            props.setDetailsData(() => {
              const newDetailsData = props.character;

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
          onClick={() => props.toggleCharacterFavorite(props.character.idx)}
        >
          <img
            src={props.character.isFavorite ? heart : heartOutline}
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
