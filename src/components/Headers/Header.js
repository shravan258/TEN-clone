import React from 'react';

import { logo_img, logo_shadow_1 } from '../../imageAddr/imgAddr';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.css';

const Header = () => {
  return (
    <div>
      <h1 className='name-header'>
        <i>T</i>
        <span className='name-remain-letters'>
          <i>he</i>
        </span>
      </h1>
      <h1 className='name-header'>
        <i>E</i>
        <span className='name-remain-letters'>
          <i>ntrepreneurship</i>
        </span>
      </h1>
      <img className='header-image' src={logo_img} alt='' />
      <img src={logo_shadow_1} alt='' srcset='' className='header-shadow' />
      <h1 className='name-header-last'>
        <i>N</i>
        <span className='name-remain-letters'>
          <i>etwork</i>
        </span>
      </h1>
      <button className='cart-button'>
        <ShoppingCartOutlinedIcon />
      </button>
      <button className='login-btn'>
        <AccountCircleIcon className='login-logo' />
        <p className='login-name'>login</p>
      </button>
      <input type='text' placeholder='Search here...' className='search-bar' />
      <SearchIcon className='search-icon' />
    </div>
  );
};

export default Header;
