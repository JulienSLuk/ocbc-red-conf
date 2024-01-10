import React, { useState } from 'react';
import './App.css';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <div className="carousel-container">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => (
          <img
            key={index}
            src={`/images/${images[(index + images.length) % images.length]}`}
            alt={`carousel-${(index + images.length) % images.length}`}
            className="carousel-image"
          />
        ))}
        <button onClick={handlePrev} className="carousel-button">
          Prev
        </button>
        <button onClick={handleNext} className="carousel-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
