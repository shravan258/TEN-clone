import React from 'react';
import './courseBenefits.css';
import { listcards } from '../../data';

const CourseBenefits = () => {
  return (
    <div>
      <div className='cb-container'>
        {listcards.map((card) => (
          <div className='cb-card'>
            <img src={card.image} alt='' className='cb_image' />
            <h3 className='cb-title'>{card.title}</h3>
            <hr className='cb-line' />
            <p className='cb-des'>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;
