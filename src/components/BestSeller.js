
import React from 'react';
import styled from "styled-components"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import best1 from '../images/best1.png';
import best2 from '../images/best2.png';
import best3 from '../images/best3.png';
import best4 from '../images/best4.png';
import best5 from '../images/best5.png';
import best6 from '../images/best6.png';
import overlay from '../images/overlay.png';

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
margin-bottom:10px;
`
const Product= styled.h4`
margin-top:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #2A2A2A;
margin-top:0px;
`
const Description= styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20px;
text-align: center;
color: #878787;
margin-bottom:7px;
`
const Price= styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 35px;
text-align: center;
color: #2A2A2A;
`

const BestSeller=() =>{
  return (
    <>
    <Title>Bestsellers</Title>
    <div className='container-fluid p-5'>
    <Swiper
      
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
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper">
                  <style>
           {`
      .swiper-button-next{
        right:14px;
        left: auto;
        top:32%;
    }
    .swiper-button-prev{
      top:32%;
      left:14px
    }
`
}
</style>
        <SwiperSlide>
            <div className='img-container'>
            <img src={best1} className="best-img" />
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 1</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
        <img src={best2} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>   
        <Product>Product 2</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
         <img src={best3} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 3</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
        <img src={best4} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
           
        <Product>Product 4</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
           <img src={best5} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        
        <Product>Product 5</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
        <img src={best6} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
          
        <Product>Product 6</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
         <img src={best1} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
         
        <Product>Product 1</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
         <img src={best2} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
          
        <Product>Product 2</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
        <img src={best3} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 3</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
       <img src={best1} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 4</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
         <img src={best2} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 5</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
             <img src={best3} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
       
        <Product>Product 6</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
         <img src={best2} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 5</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img-container'>
             <img src={best3} className="best-img"/>
            <div className='overlay'>
                <div className='text'>Add To Cart</div>
            </div>
            <span className='heart-overly'><img src={overlay}/></span>
            </div>
        <Product>Product 6</Product>
        <Description>Description</Description>
        <Price>Rs 250</Price>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default BestSeller;