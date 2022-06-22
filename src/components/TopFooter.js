
import React from 'react';
import styled from "styled-components"
import envlop from '../images/envlop.png';
import google from '../images/google.png';
import cell from '../images/cell.png';
import phone from '../images/phone.png';
import store from '../images/store.png';

const TopFooter=() =>{
  return (
    <>
      <div className='container-fluid p-5 top-footer'>
          <div className='row'>
              <div className='col-lg-4 col-md-12 col-sm-12 pb-2'>
             <div className='envlop-content'>
              <img src={envlop} className="social-icon"/>
              <p>Get Experts Tips In Your Inbox</p>
             </div>
             <div className='input-email'>
             <input type="text" placeholder='Your Email'/>
             <button type="button" className="btn-dark btn-send">Send</button>
            </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 pb-2'>
             <div className='envlop-content'>
             <img src={cell} className="social-icon"/>
              <p>Experience the PureFace mobile app</p>
              </div>
              <div className='store-img-div'>
                  <img src={google} className="store-img"/>
                  <img src={store} className="store-img"/>
              </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 pb-2'>
               <div className='envlop-content'>
               <img src={phone} className="social-icon"/>
               <p>For any help you may call us at <br/>068 12345678</p>
               </div>
               <div className='avaiable'>
                   <p>(Mon to Sat, 8am to 6am)</p></div>
              </div>
          </div>
      </div>
    </>
  );
}
export default TopFooter;