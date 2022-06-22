import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navigation from './components/Navigation';
import Carousel from "../src/components/Caurosal"
import WatchCarousal from './components/WatchCarousal';
import ShopByCarousel from './components/ShopByCarousel';
import EidSale from './components/EidSale';
import BestSeller from './components/BestSeller';
import TopBrand from './components/TopBrand';
import OnlyPureface from './components/OnlyPureface';
import TrendingStore from './components/TrendingStore';
import FeaturedBrands from './components/FeaturedBrands';
import HiddenGems from './components/HiddenGems';
import BudgetBuys from'./components/BudgetBuys';
import EditorChoice from './components/EditorChoice';
import TopFooter from './components/TopFooter';
import MiddleFooter from './components/MiddleFooter';
import MediaObject from './components/MediaObject';
import BottomFooter from './components/BottomFooter';
import Bottomnavbar from'./components/Bottomnavbar';
import TopNavbar from './components/TopNavbar';
const App = () => {
  return (
      <>
      <TopNavbar/>
    <Navigation/>
    <Bottomnavbar/>
      <Carousel/>
      <WatchCarousal/>
      <ShopByCarousel/>
      <EidSale/>
      <BestSeller/>
      <TopBrand/>
      <OnlyPureface/>
      <TrendingStore/>
      <FeaturedBrands/>
      <BudgetBuys/>
      <HiddenGems/>
      <EditorChoice/>
      <TopFooter/>
      <MiddleFooter/>
      <MediaObject/>
      <BottomFooter/>
      {/* <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/services" element={<Services />}/>
        <Route  exact path="/contact" element={<Contact />}/>
     </Routes> */}
    </> 
  );
}
export default App;
