import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Characters from '../components/Characters/Characters';
import Planets from '../components/Planets/Planets';

const Home = () => {
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
    <>
      <Navbar />
      <Characters characters={characters}/>
      <Planets />
    </>
  );
};
export default Home;
