// components/HeroSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Image, { StaticImageData } from 'next/image';

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
