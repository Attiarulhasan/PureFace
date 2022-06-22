
import React from 'react';
import styled from "styled-components"
import fb1 from'../images/fb1.png';
import fb2 from'../images/fb2.png';
import fb3 from'../images/fb3.png';
import fb4 from'../images/fb4.png';

const Title= styled.h1`
display:flex;
justify-content:center;
align-items:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
color: #2A2A2A;
`
const FeaturedBrands=() =>{
  return (
    <>
      <div className='container-fluid p-5'>
      <Title>Featured Brands</Title>
          <div className='row mt-lg-5 mt-0'>
              <div className='col-lg-3 col-md-6 col-12 pb-2'>
                  <img src={fb1} className="sale-img1"/>
              </div>
              <div className='col-lg-3 col-md-6 col-12 pb-2'>
                  <img src={fb2} className="sale-img1"/>
              </div>
              <div className='col-lg-3 col-md-6 pb-2'>
                  <img src={fb3} className="sale-img1"/>
              </div>
              <div className='col-lg-3 col-md-6 col-12 pb-2'>
                  <img src={fb4} className="sale-img1"/>
              </div>
          </div>
      </div>
    </>
  );
}
export default FeaturedBrands;