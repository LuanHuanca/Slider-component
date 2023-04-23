import React from 'react'
import "./ImageCard.css"
export const ImageCard = (props) => {
  const image = props.image
  return (
    <div className="img-container">
       <img src={image.imgsrc} alt="" />
    </div>
  )
}
