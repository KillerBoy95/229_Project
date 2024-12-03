import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => (
  <nav>
    <div className='navbar left'>
      <ul className='nav-links'>
        <li><Link to='/' className='nav-link'>Home</Link></li>
        <li><Link to='/users' className='nav-link'>Users</Link></li>
        <li><Link to='/myProfile' className='nav-link'>MyProfile</Link></li>
        <li><Link to='/signup' className='nav-link'>Sign up</Link></li>
        <li><Link to='/signin' className='nav-link'>Sign In</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
