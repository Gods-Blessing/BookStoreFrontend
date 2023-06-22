import './Navbar.css'
import React, { useState } from 'react'

// importing image
import hamburgerIcon from '../../assets/more.png';
import cartIcon from '../../assets/cart.png'
import { Link } from 'react-router-dom';

function Navbar() {

  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className='logo-container'>
        <Link to='/'>
          <h2>Bookish</h2>
        
        </Link>
      </div>

      <div className='page-navs'>
        <div className='page-links'>
          <Link className='cart-icon' to='/cart'>
            <img src={cartIcon} alt="" />
            <p>4</p>
          </Link>
          
        </div>

        <div className='profile-div'>
          <img onClick={()=> setShow(!show)} className='profile' src="https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
          { show && <ul>
            <li>Profile</li>
            <li>Log out</li>
          </ul>}
        </div>

        {/* <div className='hamburger-icon'>
          <img className='hamburger' src={hamburgerIcon}></img>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar