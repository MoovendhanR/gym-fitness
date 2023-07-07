import React from 'react'
import "./Banner.css"
import logo from "../../images/banner.jpg"
const Banner = () => {
  return (
    <div className='banner-cont'>
      <div className='banner-left'>
        <span className='left-span-big'>Manage Your Social <br/> Media With Our <br/> Top Experts</span>
        <br />
         <br/>
        <span className='left-span-small'>Get insights on your performance, and make the right decisions,Grow Organically with Us.</span>
        <br /><br />
        <div className='banner-btn'>
            <button>Let's Talk</button>
            <button>How It Works?</button>
        </div>
      </div>
      <div className='banner-right'>
      <img className="banner-img" src={logo} alt="BannerImage"/>
      </div>
    </div>
  )
}

export default Banner
