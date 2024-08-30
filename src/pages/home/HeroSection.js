// HeroSection.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://images.pexels.com/photos/27726846/pexels-photo-27726846/free-photo-of-a-camera-on-top-of-a-rock-overlooking-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images.pexels.com/photos/27845118/pexels-photo-27845118/free-photo-of-three-women-wearing-vietnamese-hats-walking-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images.pexels.com/photos/395242/pexels-photo-395242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;