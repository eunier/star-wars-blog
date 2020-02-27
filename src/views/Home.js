import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Characters from '../components/Characters/Characters';
import Planets from '../components/Planets/Planets';

const Home = () => {
  const [route] = useState('');
  const [characters, setCharacter] = useState([]);
  const [planets, setPlanets] = useState([]);

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

    fetch('https://swapi.co/api/planets')
      .then(res => res.json())
      .then(res =>
        setPlanets(
          res.results.map(planet => ({
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate
          }))
        )
      );
  });

  return (
    <>
      {route === '' ? (
        <>
          <Navbar />
          <Characters characters={characters} />
          <Planets planets={planets} />
        </>
      ) : null}
    </>
  );
};
export default Home;
