import React from 'react'
import { ImageCard } from './ImageCard'
import images from '../assets/images.json'
import "./ImagesContainer.css"
export const ImagesContainer = () => {
  return (
    <div className="slider-container">
        <h1>Imagenes</h1>
      <div className="images-container">
          {
            images.map((image)=>{
              return <ImageCard image={image} key={image.id}/>
            })
          }
      </div>
    </div>





)
}

