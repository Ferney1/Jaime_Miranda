import React from 'react';
import Slider from 'react-slick';

export default function SliderCustom({
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  },
  images
}) {
  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto p-0 md:py-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="carousel w-full mt-0">
            <Slider {...settings}>
              {images.map((image, index) => {
                const { src, alt } = image;
                return (
                  <div key={index} className="h-auto">
                    <img
                      src={src}
                      className="w-full h-auto object-contain"
                      alt={alt}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
