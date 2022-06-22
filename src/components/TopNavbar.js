
import React from 'react';
import styled from "styled-components"
import shop from '../images/shop.png';
import getapp from '../images/get-app.png';
import giftcard from '../images/gift-card.png'
import help from '../images/help.png';

const TopNavbar=() =>{
  return (
    <>
    <div className='container-fluid top-navbar'>
        <div className='row'>
            <div className='col-lg-7'>
                <div className='top-nav-contents'>
                 <h5>Delivering all over Pakistan</h5>
                </div>
            </div>
            <div className='col-lg-5'>
               <div className='top-nav-contents'>
              <ul>
               <li><img src={shop}/> Creat Your Shop</li>
               <li> <img src={getapp}/> Get App</li>
               <li> <img src={giftcard}/> Gift Card</li>
               <li> <img src={help}/> Help</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
export default TopNavbar;