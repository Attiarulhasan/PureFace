
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Trend1 from '../images/Trend1.png';
import Trend2 from '../images/Trend2.png';
import Trend3 from '../images/Trend3.png';
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

const TrendingStore=() =>{
  return (
    <>
    <Title>Trending Stores</Title>
    <div className='container-fluid'>
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
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='watch1'><img src={Trend1}/></SwiperSlide>
        <SwiperSlide className='watch1'><img src={Trend2}/></SwiperSlide>
        <SwiperSlide className='watch1'><img src={Trend3}/></SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
}
export default TrendingStore;