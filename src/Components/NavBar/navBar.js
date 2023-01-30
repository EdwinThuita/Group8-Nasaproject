import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

function NavBar(props) {
  const { user, logout } = props;

  const getLinkClass = (navData) => {
    return navData.isActive ? styles.linkActive : styles.link;
  };
  return (
    <div className={styles.navBar}>
      <h1 className={styles.h1}>NASA API</h1>

      <div className={styles.links}>
        <NavLink to="home" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="marsRover" className={getLinkClass}>
          Mars Rover Photos
        </NavLink>
        <NavLink to="marsWeather" className={getLinkClass}>
          Mars Weather
        </NavLink>

        <NavLink to="objectsNearEarth" className={getLinkClass}>
          Objects Near Earth
        </NavLink>

        <NavLink to="asteroidList" className={getLinkClass}>
          Asteroid List
        </NavLink>
      </div>

      <div>
        <label className={styles.user}>{user}</label>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
