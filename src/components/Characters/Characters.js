import React, { useState, useEffect } from 'react';

import CharacterCard from './CharacterCard';

const Character = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res =>
        setCharacter(
          res.results.map(character => ({
            name: character.name,
            gender: character.gender,
            hairColor: character.hair_color,
            eyeColor: character.eye_color,
            height: character.height,
            birthYear: character.birth_year,
            skinColor: character.skin_color
          }))
        )
      );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Characters</h3>
        </div>
      </div>

      <div className="row">
        <div className="d-flex flex-col flex-nowrap overflow-auto">
          {characters.map((character, idx) => (
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
};

export default Character;
