import React, { useState, useEffect } from 'react';

import PlanetCard from './PlanetCard';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Planets</h3>
          </div>
        </div>

        <div className="row">
          <div className="d-flex flex-col flex-nowrap overflow-auto">
            {planets.map((planet, idx) => (
              <PlanetCard
                key={idx}
                name={planet.name}
                population={planet.population}
                terrain={planet.terrain}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
