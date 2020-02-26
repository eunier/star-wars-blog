import React from 'react';
import PropsTypes from 'prop-types';

const CharacterCard = props => (
  <div className="card" style={{ minWidth: '18rem' }}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="/#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

CharacterCard.propTypes = {
  name: PropsTypes.string,
  gender: PropsTypes.string,
  hairColor: PropsTypes.string,
  eyeColor: PropsTypes.string,
  height: PropsTypes.string,
  birthYear: PropsTypes.string,
  skinColor: PropsTypes.string
};

export default CharacterCard;
