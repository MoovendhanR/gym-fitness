import React from 'react'
import "./Logobanner.css"
import Facebook from "../../images/facebook.png"
import Giga from "../../images/gigabyte.png"
import Intel  from "../../images/intel.png"
import Linkedin from "../../images/linkedin.png"
import Motrola from "../../images/motorola.png"
import Reebok from "../../images/reebok.png"

const Logobanner = () => {
  return (
    <>
     {/* <div className="circular-container">
      <div className="circular-shape">
        <img src="https://w7.pngwing.com/pngs/247/15/png-transparent-arrow-arrow-angle-triangle-black-thumbnail.png" alt="Arrow" className="arrow-image" />
        <div className="text-overlay">
          <span>Our</span>
          <span>Work</span>
          <span>Our</span>
          <span>Work</span>
          {/* <span>Our</span>
          <span>Work</span> 
        </div>
      </div>
    </div> */}
    <div className="logobanner">
         <img src={Facebook} alt="facebook" />
         <img src={Giga} alt="giga" />
         <img src={Intel} alt="intel" />
         <img src={Linkedin} alt="linkedin" />
         <img src={Motrola} alt="motrola" />
         <img src={Reebok} alt="reebok" />
    </div>
    </>
  )
}

export default Logobanner
