import { useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import Home from "../Home/home";
import styles from "./user.module.css";
import MarsRoverPhotos from "../MarsRover/marRover";
import MarsWeather from "../MarsWeather/marsWeather";
import NearEarthObject from "../ObjectsNearEarth/objectsNearEarth";
import AsteroidList from "../AsteroidList/asteroidList";

function User(props) {
  const navigate = useNavigate();
  const { user, logout } = props;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <NavBar user={user} logout={logout} />

      <div className={styles.pages}>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="marsRover" element={<MarsRoverPhotos />} />
          <Route path="marsWeather" element={<MarsWeather />} />
          <Route path="objectsNearEarth" element={<NearEarthObject />} />
          <Route path="asteroidList" element={<AsteroidList />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
