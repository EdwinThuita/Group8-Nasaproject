import React, { Component } from "react";
import axios from "axios";
import styles from "./marsRover.module.css";

class MarsRoverPhotos extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=cRCGvognuPRDHPzyBbC1caHZpXn2SxvcEkhUwXK4"
      )
      .then((res) => {
        this.setState({ photos: res.data.photos });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={styles.main}>
        {this.state.photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={photo.camera.name}
            className={styles.img}
          />
        ))}
      </div>
    );
  }
}

export default MarsRoverPhotos;
