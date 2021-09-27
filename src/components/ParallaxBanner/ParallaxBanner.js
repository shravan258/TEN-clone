import React from 'react';
import './parallax.css';
import { walking_foots } from '../../imageAddr/imgAddr';
import { Parallax } from 'react-parallax';
const ParallaxBanner = () => {
  return (
    <div>
      <div className='parallax-div'>
        <Parallax
          bgImage={walking_foots}
          strength={400}
          className='parallax-image'
        >
          <div className='parallax-scroll'>
            <h3 className='subheading'>Welcome to</h3>
            <h1 className='heading'>THE NEXT BIG THING</h1>
            <hr className='line-button' />
            <button className='parallax-button'>Join TEN virtual campus</button>
          </div>
        </Parallax>
        <div style={{ height: '100vh' }}></div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
