import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar_list'>
        <li className='nav-items'>
          Home <span className='vertical-line'></span>
        </li>
        <li className='nav-items'>
          Online Courses<span className='vertical-line'></span>
        </li>
        <li className='nav-items'>
          We're Hiring<span className='vertical-line'></span>
        </li>
        <li className='nav-items'>More </li>
      </ul>
    </div>
  );
};

export default Navbar;
