import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
       <p className='nav-frist'>Marke<span>to</span></p>
          <ul className='menu'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Company </li>
            <li>Resources</li>
            <li>Contact US</li>
          </ul>
          <div className="nav-btn">
          <button className='btn ' >Let's Talk</button>

          </div>
         </div>
  )
}

export default Navbar
