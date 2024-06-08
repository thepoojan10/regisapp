import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './slide';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <Slide slideNumber={1} />
        <Slide slideNumber={2} />
        <Slide slideNumber={3} />
        <Slide slideNumber={4} />
        <Slide slideNumber={5} />
        <Slide slideNumber={6} />
      </Slider>
    </div>
  );
};

export default App;
