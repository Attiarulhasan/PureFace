
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import watch1 from '../images/watch1.png';
import watch2 from '../images/watch2.png';
import watch3 from '../images/watch3.png';
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
margin-top:40px;
margin-bottom:10px;
`

const WatchCarousal=() =>{
  return (
    <>
    <div className='container-fluid'>
       <Title>Watch & Buy</Title>
    <div className='watch p-5'>
    <Swiper
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='watch1'><img src={watch1}/></SwiperSlide>
        <SwiperSlide className='watch1'><img src={watch2}/></SwiperSlide>
        <SwiperSlide className='watch1'><img src={watch3}/></SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
}
export default WatchCarousal;