import React from "react";
import "./ImageCard.css";
export const ImageCard = (props, className) => {
  const image = props.image;
  return (
    <div className={`img-container ${className}`}>
      <img src={image.imgsrc} alt="" />
    </div>
  );
};
