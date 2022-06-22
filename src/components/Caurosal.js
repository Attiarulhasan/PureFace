
import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import slider1 from'../images/slider1.png';
import heroimg from'../images/heroimg.jpg';


const Carousel=() =>{
  return (
    <>
    <div className='container-fluid hero-image-container'>
    <button type="button" class="btn btn hero-button">Shop Now</button>
    <Swiper
       loop={true}
       loopFillGroupWithBlank={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} className="hero-img"/></SwiperSlide>
        <SwiperSlide><img src={heroimg} className="hero-img"/></SwiperSlide>
        <SwiperSlide><img src={slider1} className="hero-img"/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default Carousel;