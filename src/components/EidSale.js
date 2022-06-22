
import React from 'react';
import styled from "styled-components"
import sale1 from'../images/sale1.png';
import sale2 from'../images/sale2.png';
import sale3 from'../images/sale3.png';
import sale4 from'../images/sale4.png';
import sale5 from'../images/sale5.png';
import sale6 from'../images/sale6.png';
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

const EidSale=() =>{
  return (
    <>
      <div className='container-fluid p-5'>
          <Title>Eid Sale</Title>
          <div className='row mt-5'>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                 <img src={sale1} className="sale-img"/>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                  <img src={sale2} className="sale-img"/>
              </div>
          </div>
          <div className='row mt-lg-5 mt-0'>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={sale3} className="sale-img1"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={sale4} className="sale-img1"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={sale5} className="sale-img1"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={sale6} className="sale-img1"/>
              </div>
          </div>
      </div>
    </>
  );
}
export default EidSale;