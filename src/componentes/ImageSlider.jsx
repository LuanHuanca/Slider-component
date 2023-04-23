import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="images-container">
      {images.map((image, index) => {
        let className = '';
        if (index === currentIndex) {
          className = 'center';
        } else if (index === (currentIndex - 1 + images.length) % images.length || index === (currentIndex + 1) % images.length) {
          className = 'side';
        }
        return <ImageCard key={image.id} image={image} className={className} />;
      })}
    </div>
  );
};

export default ImageSlider;
