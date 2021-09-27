import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { testimonial } from '../../data';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{ color: 'gray', fontSize: '45px', marginTop: '80px' }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{ color: 'gray', fontSize: '45px', marginTop: '80px' }}
      />
    </div>
  );
};

function Testimonial() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <h1 className='test-title'>Testimonials</h1>
      <hr className='test-line' />
      <div
        className='testimonial'
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'blue',

          height: '400px',
        }}
      >
        <div style={{ width: '70%' }}>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            {...settings}
          >
            {testimonial.map((card) => (
              <div className='card-container'>
                <p className='card-content'>{card.content}</p>
                <p className='card-author'>{card.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
