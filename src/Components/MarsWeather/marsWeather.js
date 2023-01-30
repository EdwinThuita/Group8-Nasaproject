import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../Utils/apiKey";
import styles from "./marsWeather.module.css";

const MarsWeather = () => {
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [pressure, setPressure] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(weather).length) {
      setTemperature(getTemperature(weather));
      setPressure(getPressure(weather));
      setWindSpeed(getWindSpeed(weather));
    }
  }, [weather]);

  const getAverage = (arr) => {
    let sum = 0;
    for (let item of arr) {
      sum += item;
    }

    return parseInt(sum / arr.length);
  };

  const getTemperature = (data) => {
    let temps = data.validity_checks[1219].AT.sol_hours_with_data;
    return getAverage(temps);
  };

  const getWindSpeed = (data) => {
    let temps = data.validity_checks[1219].HWS.sol_hours_with_data;
    return getAverage(temps);
  };

  const getPressure = (data) => {
    let temps = data.validity_checks[1219].PRE.sol_hours_with_data;
    return getAverage(temps);
  };

  return (
    <div className={styles.weather} style={{backgroundImage: `url("/planet-mars.jpg")`}}>
      <h2 className={styles.h2}>Weather on Mars</h2>

      <div className={styles.data}>
        <p>Temperature: {temperature} F</p>
        <p>Wind Speed: {windSpeed} mph</p>
        <p>Pressure: {pressure} Pa</p>
      </div>
    </div>
  );
};

export default MarsWeather;
