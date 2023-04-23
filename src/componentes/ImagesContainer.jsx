import React from "react";
import { ImageCard } from "./ImageCard";
import images from "../assets/images.json";
import ImageSlider from "./ImageSlider";
import "./ImagesContainer.css";
export const ImagesContainer = () => {
  return (
    <div className="slider-container">
      <h1>Imagenes</h1>
      <div className="elipse"></div>
      <ImageSlider images={images} />
      <div className="elipse"></div>
    </div>
  );
};
