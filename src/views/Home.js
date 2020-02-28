import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Characters from '../components/Characters/Characters';
import Planets from '../components/Planets/Planets';
import Details from './Details';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [favoriteCharacterList, setFavoriteCharacterList] = useState([]);
  const [favoritePlanetList, setFavoritePlanetList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res =>
        setCharacters(
          res.results.map((character, idx) => ({
            name: character.name,
            gender: character.gender,
            hairColor: character.hair_color,
            eyeColor: character.eye_color,
            height: character.height,
            birthYear: character.birth_year,
            skinColor: character.skin_color,
            idx,
            isFavorite: false
          }))
        )
      );

    fetch('https://swapi.co/api/planets')
      .then(res => res.json())
      .then(res =>
        setPlanets(
          res.results.map((planet, idx) => ({
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            idx,
            isFavorite: false
          }))
        )
      );
  }, []);

  useEffect(() => {
    setFavoriteCharacterList(() =>
      characters
        .filter(val => val.isFavorite)
        .map(val => ({ name: val.name, type: 'character', idx: val.idx }))
    );
  }, [characters]);

  useEffect(() => {
    setFavoritePlanetList(() =>
      planets
        .filter(val => val.isFavorite)
        .map(val => ({ name: val.name, type: 'planet', idx: val.idx }))
    );
  }, [planets]);

  useEffect(() => {
    setFavoriteList(() => [...favoriteCharacterList, ...favoritePlanetList]);
  }, [favoriteCharacterList, favoritePlanetList]);

  const toggleCharacterFavorite = idx => {
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

  const togglePlanetFavorite = idx => {
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
      <Navbar
        favoriteList={favoriteList}
        toggleCharacterFavorite={toggleCharacterFavorite}
        togglePlanetFavorite={togglePlanetFavorite}
      />
      {!detailsData ? (
        <>
          <Characters
            characters={characters}
            toggleCharacterFavorite={toggleCharacterFavorite}
            setDetailsData={setDetailsData}
          />

          <Planets
            planets={planets}
            togglePlanetFavorite={togglePlanetFavorite}
            setDetailsData={setDetailsData}
          />
        </>
      ) : (
        <Details detailsData={detailsData} setDetailsData={setDetailsData} />
      )}
    </>
  );
};

export default Home;
