import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <>  
      <div className='navbar'>
        <img src={logo} className='logoStyle' alt="logo" />
        <ul className='navItems'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar