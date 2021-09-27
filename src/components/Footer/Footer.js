import React from 'react';
import './footer.css';
import { facebook, twitter, instagram } from '../../imageAddr/imgAddr';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h3 className='footer-heading'>Subscribe to our news letter</h3>
      <table className='f-table'>
        <tr>
          <td className='f-table-td'>
            <input type='text' placeholder='Full name' className='f-table-ip' />
          </td>
          <td>
            <input
              type='text'
              placeholder='College Name'
              className='f-table-ip'
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              placeholder='Mobile Number'
              className='f-table-ip'
            />
          </td>
          <td>
            <input type='text' placeholder='Email' className='f-table-ip' />
          </td>
        </tr>
      </table>
      <br />
      <input type='checkbox' name='' id='' className='f-checkbox' />
      <span> </span>
      <label htmlFor='' className='f-label'>
        Join TEN's dicord community
      </label>
      <br />
      <button className='f-button'>Submit</button>
      <div className='f-socials-cont'>
        <img
          src={facebook}
          alt=''
          className='f-social'
          height='50px'
          width='50px'
        />
        <img
          src={twitter}
          alt=''
          className='f-social'
          height='50px'
          width='50px'
        />
        <img
          src={instagram}
          alt=''
          className='f-social'
          height='50px'
          width='50px'
        />
      </div>
      <h3 className='f-about-us'>
        About Us <br /> FAQ's <br />
        Contact Us
      </h3>
      <div className='f-copy'>
        <span className='f-footer-min'>
          © 2020 Limitless Technologies - The Entrepreneurship Network
        </span>
      </div>
    </div>
  );
};

export default Footer;
