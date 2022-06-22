
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import shop1 from '../images/shop1.png';
import shop2 from '../images/shop2.png';
import shop3 from '../images/shop3.png';
import shop4 from '../images/shop4.png';
import shop5 from '../images/shop5.png';
import shop6 from '../images/shop6.png';
const Title= styled.h1`
display:flex;
justify-content:center;
align-items:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #2A2A2A;
margin-top:25px;
margin-bottom:25px;
`

const ShopByCarousel=() =>{
  return (
    <>
    <div className='container-fluid p-5'>
    <Title>Shop By Category</Title>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={shop1} className="shop-img" /></SwiperSlide>
        <SwiperSlide><img src={shop2} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop3} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop4} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop5} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop6} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop1} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop2} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop3} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop1} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop2} className="shop-img"/></SwiperSlide>
        <SwiperSlide><img src={shop3} className="shop-img"/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default ShopByCarousel;