import React from 'react';
import About from './About';
import Slider from './Slider';
import Reviews from './Reviews';
import Join from './Join';

const Main = () => {
  return (
    <div className="main">
      <About />
      <Slider />
      <Reviews />
      <Join />
    </div>
  );
};

export default Main;
