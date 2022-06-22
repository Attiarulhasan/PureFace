
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import edit1 from '../images/edit1.png';
import edit2 from '../images/edit2.png';
import edit3 from '../images/edit3.png';
import edit4 from '../images/edit4.png';
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

const EditorChoice=() =>{
  return (
    <>
    <Title>Editor's Choice</Title>
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
        <SwiperSlide><img src={edit1} className="buy-img" /></SwiperSlide>
        <SwiperSlide><img src={edit2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit4} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit1} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit3} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit1} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit2} className="buy-img"/></SwiperSlide>
        <SwiperSlide><img src={edit3} className="buy-img"/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default EditorChoice;