// Carousel.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Contenu de chaque slide */}
      <div>
        <h3>OTacos</h3>
        <p>Contenu de la card 1</p>
      </div>
      <div>
        <h3>Card 2</h3>
        <p>Contenu de la card 2</p>
      </div>
      <div>
        <h3>Card 3</h3>
        <p>Contenu de la card 3</p>
      </div>
      {/* Ajoute plus de slides selon tes besoins */}
    </Slider>
  );
}

export default Carousel;
