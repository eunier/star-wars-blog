import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';

const Characters = props => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h3 className="text-white mb-3 mt-3">Characters</h3>
      </div>
    </div>

    <div className="row">
      <div className="d-flex flex-col flex-nowrap overflow-auto">
        {props.characters.map((character, idx) => (
          <CharacterCard
            key={idx}
            character={character}
            toggleCharacterFavorite={props.toggleCharacterFavorite}
            setDetailsData={props.setDetailsData}
          />
        ))}
      </div>
    </div>
  </div>
);

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  toggleCharacterFavorite: PropTypes.func.isRequired,
  setDetailsData: PropTypes.func.isRequired
};

export default Characters;
