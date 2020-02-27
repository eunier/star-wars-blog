import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Characters from '../components/Characters/Characters';
import Planets from '../components/Planets/Planets';

const Home = () => {
  const [route] = useState('');
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res =>
        setCharacters(
          res.results.map(character => ({
            name: character.name,
            gender: character.gender,
            hairColor: character.hair_color,
            eyeColor: character.eye_color,
            height: character.height,
            birthYear: character.birth_year,
            skinColor: character.skin_color,
            isFavorite: false
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
            climate: planet.climate,
            isFavorite: false
          }))
        )
      );
  }, []);

  useEffect(() => {
    setFavoritesList(() =>
      [...characters, ...planets]
        .filter(el => el.isFavorite)
        .map(val => val.name)
    );
  }, [characters, planets]);

  const setCharacterFavorite = idx => {
    setCharacters(prevCharacters =>
      prevCharacters.map((prevCharacterVal, prevCharacterIdx) => {
        if (prevCharacterIdx === idx) {
          return {
            ...prevCharacterVal,
            isFavorite: !prevCharacterVal.isFavorite
          };
        } else {
          return prevCharacterVal;
        }
      })
    );
  };

  const setPlanetFavorite = idx => {
    setPlanets(prevPlanets =>
      prevPlanets.map((prevPlanetVal, prevPlanetIdx) => {
        if (prevPlanetIdx === idx) {
          return {
            ...prevPlanetVal,
            isFavorite: !prevPlanetVal.isFavorite
          };
        } else {
          return prevPlanetVal;
        }
      })
    );
  };

  return (
    <>
      {!route ? (
        <>
          <Navbar {...{ charactersFavoritesList: favoritesList }} />
          <Characters {...{ characters, setCharacterFavorite }} />
          <Planets {...{ planets, setPlanetFavorite }} />
        </>
      ) : null}
    </>
  );
};

export default Home;
