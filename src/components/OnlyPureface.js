
import React from 'react';
import styled from "styled-components"
import face1 from'../images/face1.png';
import face2 from'../images/face2.png';
import face3 from'../images/face3.png';
import face4 from'../images/face4.png';
import face5 from'../images/face5.png';
import face6 from'../images/sale6.png';
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
const OnlyPureface=() =>{
  return (
    <>
      <div className='container-fluid p-5'>
           <Title>Only At Pureface</Title>
          <div className='row mt-5'>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                 <img src={face1} className="face-img"/>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 pb-2'>
                  <img src={face2} className="face-img"/>
              </div>
          </div>
          <div className='row mt-lg-5 mt-0'>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={face3} className="face-img"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={face4} className="face-img"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={face5} className="face-img"/>
              </div>
              <div className='col-md-3 col-12 pb-2'>
                  <img src={face3} className="face-img"/>
              </div>
          </div>
      </div>
   
    </>
  );
}
export default OnlyPureface;