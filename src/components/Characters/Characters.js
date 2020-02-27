import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';

const Characters = props => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h3>Characters</h3>
      </div>
    </div>

    <div className="row">
      <div className="d-flex flex-col flex-nowrap overflow-auto">
        {props.characters.map((character, idx) => (
          <CharacterCard
            key={idx}
            name={character.name}
            gender={character.gender}
            hairColor={character.hairColor}
            eyeColor={character.eyeColor}
          />
        ))}
      </div>
    </div>
  </div>
);

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default Characters;
