import React, { useRef } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Mousewheel, FreeMode, Autoplay } from 'swiper/modules';

const options = {
  loop: false,
  arrows: false,
  pagination: false,
  spaceBetween: 0,
  slidesPerView: 3,
  mousewheel: {
    releaseOnEdges: true,
  },
  autoplay: { delay: 3000, disableOnInteraction: false },
  breakpoints: {
    320: {
      slidesPerView: 2.1,
      spaceBetween: 2,
    },
    370: {
      slidesPerView: 2.4,
      spaceBetween: 2,
    },
    420: {
      slidesPerView: 2.8,
      spaceBetween: 2,
    },
    480: {
      slidesPerView: 3.2,
      spaceBetween: 2,
    },
    575: {
      slidesPerView: 3.5,
      spaceBetween: 2,
    },
    767: {
      slidesPerView: 4.5,
      spaceBetween: 5,
    },
    991: {
      slidesPerView: 5.2,
      spaceBetween: 5,
    },
    1199: {
      slidesPerView: 6.5,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 7.5,
      spaceBetween: 5,
    },
  },
};

const CategoryTabSlider = ({ children,  onMove = () => {}, activeCategoryIndex = 0,   autoplay = { delay: 3000, disableOnInteraction: false } }) => {
  const swiperRef = useRef();

  return (
    <Swiper ref={swiperRef} modules={[Mousewheel, FreeMode, Autoplay]} {...options} freeMode>
      {children}
    </Swiper>
  );
};

export default CategoryTabSlider;
