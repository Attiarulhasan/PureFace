
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import buy1 from '../images/buy1.png';
import buy2 from '../images/buy2.png';
import buy3 from '../images/buy3.png';
import buy4 from '../images/buy4.png';

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
const BudgetBuys=() =>{
  return (
    <>
    <Title>Budget Buys</Title>
    <div className='container-fluid p-5'>
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={buy1} className="buy-img" /></SwiperSlide>
        <SwiperSlide><img src={buy2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy4} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy1} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy1} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy4} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy1} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy4} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={buy2} className="buy-img"/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default BudgetBuys;