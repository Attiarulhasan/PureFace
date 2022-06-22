
import React from 'react';
import styled from "styled-components"
import cart from '../images/user.png';
import user from '../images/cart.png';
import search from '../images/search.png'

const Navigation=() =>{
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PureFace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link activeClassName" aria-current="page" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link activeClassName" href="#">Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PF Bazar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PF Connect</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PF Recycle</a>
        </li>
      </ul>
    </div>
    <div className="search-input">
    <form >
    <img src={search} className="search-icon"/>
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
      </form>
      </div>
      <div className='cart-user-icons d-flex'>
      <img src={cart}/>
        <img src={user}/>

  </div>
  </div>
 
 
</nav>
    </>
  );
}
export default Navigation;