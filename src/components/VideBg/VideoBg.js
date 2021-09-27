import React from 'react';
import bgvideo from '../../images/videobg.mp4';
import './videobg.css';

const VideoBg = () => {
  return (
    <div>
      <div className='bg-title-container'>
        <h1 className='bg-title'>Power of TEN Consulting </h1>
        <button className='explore_here'>Explore here</button>
      </div>
      <div className='video-container'>
        <div className='video-overlay'></div>
        <video
          className='videoTag'
          autoPlay
          loop
          muted
          width='700px'
          height='400'
          className='video'
        >
          <source src={bgvideo} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default VideoBg;
