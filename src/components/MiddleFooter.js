
import React from 'react';
import styled from "styled-components"
import fbb from '../images/fbb.png';
import insta from '../images/insta.png';
import ytube from '../images/ytube.png';
import wapp from '../images/wapp.png';

const MiddleFooter=() =>{
 
  return (
    <>
      <div className='container-fluid p-5 middle-footer'>
          <div className='row justify-content-center'>
              <div className='col-lg-2 col-md-6 col-sm-6 pb-2'>
             <div className='mfooter-contents'>
               <h3>PureFayce</h3>
               <p>Who are we?</p>
               <p>Careers</p>
               <p>Testimonials</p>
               <p>PureFace CSR</p>
             </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 pb-2'>
              <div className='mfooter-contents'>
               <h3>Social</h3>
              
                 <div className='social-icon'>
                 <img src={fbb}/>
                 <p>Facebook</p></div>
                 <div className='social-icon'>
                 <img src={insta}/>
                 <p>Instagram</p></div>
                 <div className='social-icon'>
                 <img src={ytube}/>
                 <p>Youtube</p></div>
                 <div className='social-icon'>
                 <img src={wapp}/>
                 <p>Whatsapp</p></div>
             </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 pb-2'>
              <div className='mfooter-contents'>
             <h3>Help</h3>
             <p>Contact Us</p>
               <p>Frequently Asked Questions</p>
               <p>Cancellation & Returns</p>
               <p>Shipping & Delivery</p>
               <p>Sale on PureFace</p>
             </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 pb-2'>
              <div className='mfooter-contents'>
             <h3>Quick Links</h3>
                <p>Offer Zones</p>
               <p>New Launches</p>
               <p>PureFace Men</p>
               <p>PureFace Fashion</p>
             </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 pb-2'>
              <div className='mfooter-contents'>
             <h3>Top Categories</h3>
               <p>Makeup</p>
               <p>Skin</p>
               <p>Hair</p>
               <p>Personal Care</p>
               <p>Appliances</p>
               <p>Jewellery</p>
               <p>Kids</p>
               <p>Men</p>
             </div>
              </div>
          </div>
      </div>
   
    </>
  );
}
export default MiddleFooter;