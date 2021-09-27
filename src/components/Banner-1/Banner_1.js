import React from 'react';
import './banner1.css';
import { about_us } from '../../imageAddr/imgAddr';
import banner1 from '../../images/banner1.jpg';

function Banner_1() {
  return (
    <div>
      <div className='banner-1'>
        <img src={banner1} alt='nice' className='banner1' />
      </div>
      <div className='aboutus'>
        <h2 id='about-us-name'>About us</h2>
        <img src={about_us} alt='' className='about-us-image' />
        <p className='about-us-desc'>
          Learning Together <br /> From the Comfort <br /> of Your Home
        </p>
        <button className='learn-more'>Learn more</button>
      </div>
    </div>
  );
}

export default Banner_1;
