import axios from "axios";
import { useEffect, useState } from "react";
import API_KEY from "../../Utils/apiKey";
import styles from "./home.module.css";

function Home(props) {
  const [picture, setPicture] = useState({});
  const date = new Date();

  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDay()}`;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}`
      )
      .then((response) => {
        setPicture(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={styles.home}
      style={{ backgroundImage: `url(${picture.url})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.infoDiv}>
          <div className={styles.info}>
            <label className={styles.label}>Date</label>
            <label className={styles.value}>{formattedDate}</label>
          </div>

          <div className={styles.info}>
            <label className={styles.label}>Title</label>
            <label className={styles.value}>{picture.title}</label>
          </div>
        </div>

        <p>{picture.explanation}</p>
      </div>
    </div>
  );
}

export default Home;
