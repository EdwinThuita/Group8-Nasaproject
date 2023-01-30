import React, { useEffect, useState } from "react";
import API_KEY from "../../Utils/apiKey";
import styles from "./objectsNearEarth.module.css";

function NearEarthObject() {
  const [nearEarth, setNearEarth] = useState([]);
  const [dataArray] = useState([]);
  console.log(dataArray);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setNearEarth(data.near_earth_objects["2015-09-08"]);
      });
  }, []);

  let customList = nearEarth.map((item) => {
    return (
      <h1> {item.estimated_diameter.kilometers.estimated_diameter_max} </h1>
    );
  });
  let customData = nearEarth.map((item) => {
    return <h2> {item.nasa_jpl_url}</h2>;
  });
  let customApproach = nearEarth.map((item) => {
    return (
      <h3>
        {item.close_approach_data[0].relative_velocity.kilometers_per_second}
      </h3>
    );
  });
  let customDistance = nearEarth.map((item) => {
    return <h4>{item.close_approach_data[0].miss_distance.astronomical}</h4>;
  });
  let customOrbit = nearEarth.map((item) => {
    return <h5>{item.close_approach_data[0].orbiting_body}</h5>;
  });
  let customHazard = nearEarth.map((item) => {
    return <h6>{item.neo_reference_id}</h6>;
  });

  return (
    <div className={styles.near}>
      <h1>STELLAR SPACE ACTIVITY</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Estimated Kilometer Max</th>
            <th className={styles.header}>NAME</th>
            <th className={styles.header}>CUSTOM APPROACH DATA</th>
            <th className={styles.header}>CUSTOM DISTANCE</th>
            <th className={styles.header}>CUSTOM ORBIT</th>
            <th className={styles.header}>CUSTOM HAZARD</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={styles.data}>{customList}</td>
            <td className={styles.data}>{customData}</td>
            <td className={styles.data}>{customApproach}</td>
            <td className={styles.data}> {customDistance} </td>
            <td className={styles.data}>{customOrbit}</td>
            <td className={styles.data}>{customHazard}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NearEarthObject;
