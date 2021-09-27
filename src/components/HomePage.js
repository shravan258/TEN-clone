import React from 'react';

import Testimonial from './Testimonials/Testimonial';
import './homepage.css';
import VideoBg from './VideBg/VideoBg';
import Footer from './Footer/Footer';
import Header from './Headers/Header';
import Navbar from './Navbar/Navbar';
import ChatButton from './ChatButton/ChatButton';
import ParallaxBanner from './ParallaxBanner/ParallaxBanner';
import ExploreButtons from './ExploreCourses/ExploreButtons';
import CourseBenefits from './CourseBenefits/CourseBenefits';
import Banner1 from './Banner-1/Banner_1';

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <ChatButton />
      <Banner1 />
      <ParallaxBanner />
      <ExploreButtons />
      <CourseBenefits />
      <Testimonial />
      <VideoBg />
      <Footer />
    </>
  );
}

export default HomePage;
