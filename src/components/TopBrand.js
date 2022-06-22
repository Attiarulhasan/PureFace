
import React from 'react';
import styled from "styled-components"
import brand1 from'../images/brand1.png';
import brand2 from'../images/brand2.png';
import brand3 from'../images/brand3.png';
import brand4 from'../images/brand4.png';
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
`
const TopBrand=() =>{
  return (
    <>
      <div className='container-fluid p-5'>
          <Title>Top Brands</Title>
          <div className='row mt-5'>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                 <img src={brand1} className="brand-img"/>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                  <img src={brand2} className="brand-img"/>
              </div>
          </div>
          <div className='row mt-4'>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                 <img src={brand3} className="brand-img"/>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                  <img src={brand4} className="brand-img"/>
              </div>
          </div>
      </div>
    </>
  );
}
export default TopBrand;