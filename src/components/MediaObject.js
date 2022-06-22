
import React from 'react';
import shiping from '../images/shiping.png';
import returns from '../images/returns.png';
import authentic from '../images/authentic.png';
import brandss from '../images/brandss.png';

const MediaObject=() =>{
  return (
    <>
      <div className='container-fluid p-5'>
          <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12 pb-2'>
              <div class="media">
              <div className='media-img'>
           <img class="mr-3" src={shiping} alt=""/></div>
       <div class="media-body">
        <h5>Free Shipping</h5>
          <p> On Orders Above Rs 2000</p>
      </div>
      </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 pb-2'>
              <div class="media">
                  <div className='media-img'>
             <img class="mr-3" src={returns} alt=""/></div>
             <div class="media-body">
            <h5>Easy Returns</h5>
              <p>15 - Day Return Policy</p>
      </div>
      </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 pb-2'>
             
              <div class="media">
              <div className='media-img'>
           <img class="mr-3" src={authentic} alt="" /></div>
       <div class="media-body">
        <h5>100% Authentic</h5>
        <p>Products Sourced Directly</p>
      </div>
      </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 pb-2'>
              <div class="media">
              <div className='media-img'>
              <img class="mr-3" src={brandss} alt=""/></div>
             <div class="media-body">
             <h5>20+ Brands</h5>
              <p>2000+ Products</p>
      </div>
      </div>
     </div>
    </div>
      </div>
    </>
  );
}
export default MediaObject;