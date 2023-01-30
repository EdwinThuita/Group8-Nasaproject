import React, { useState, useEffect } from "react";
import axios from "axios";

function AsteroidList() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=cRCGvognuPRDHPzyBbC1caHZpXn2SxvcEkhUwXK4"
      )
      .then((response) => {
        setAsteroids(response.data.close_approach_data);
      });
  }, []);

  return (
    <div>
      <h2>Asteroids</h2>
      <ul>
        {asteroids.map((asteroid) => (
          <li key={asteroid.id}>{asteroid.orbiting_body}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsteroidList;
