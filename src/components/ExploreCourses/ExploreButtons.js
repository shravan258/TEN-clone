import React from 'react';
import {
  explore_1,
  explore_2_1,
  explore_2_2,
  explore_3,
} from '../../imageAddr/imgAddr';
import './Explore.css';

const ExploreButtons = () => {
  return (
    <div>
      <div className='explore_1_courses'>
        <img src={explore_1} alt='' srcset='' className='explore_1' />
        <p className='explore_1_content'>
          Entrepreneurship <br />
          made fun
        </p>
        <h2 className='explore_des_1'>Our Courses</h2>
        <p className='explore_des_2'>
          Your New <br /> Journey Begins Here <br />
          Today
        </p>
      </div>
      <button className='explore_1_button'>Explore here</button>
      <div className='explore_2_courses'>
        <img src={explore_2_1} alt='' className='explore_2_1' />
        <p className='explore_2_content'>
          Digital <br />
          Marketing
        </p>
        <img src={explore_2_2} alt='' className='explore_2_2' />
      </div>
      <button className='explore_2_button'>Explore here</button>
      <div className='explore_3_courses'>
        <p className='explore_3_content'>
          Product Management <br />
          Like a pro
        </p>
        <img src={explore_3} alt='' className='explore_3' />
        <button className='explore_3_button'>Explore here</button>
      </div>
      <div className='course-benefits'>
        <p className='course-benefits-title'>Our Course Benefits</p>
      </div>
    </div>
  );
};

export default ExploreButtons;
