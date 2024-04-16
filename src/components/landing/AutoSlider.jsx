import React, { useState, useEffect } from 'react';
import CO_INFO from '../../company-info';

export default function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define slides directly from CO_INFO array
  const slides = CO_INFO.map((info) => (
    <div className='company-logo-box' key={info.name}>
      <div className='img-box'>
        <img className="company-logo" src={info.url} alt={info.alt} />
      </div>
      <h3 className='company-name'>{info.name}</h3>
    </div>
  ));

  // Function to transition to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Automatically transition to the next slide every 3 seconds
    const interval = setInterval(nextSlide, 1500);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run this effect only once on component mount

  return (
    <div className='auto-slider' style={{padding: width > 600 ? '2.75em' : null}}>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 10}%)` }}>
          {slides}
        </div>
      </div>
    </div>
  )
}
