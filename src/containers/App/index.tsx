import React from 'react';
import Banner from '../../components/Banner';
import SecondBanner from '../../components/SecondBanner';
import FeaturedStories1 from '../../components/FeaturedStories1';
import FeaturedCarousel from '../../components/FeaturedCarousel';
import Download from '../../components/Download';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import Inspirations from '../../components/Inspirations';
import AboutUs from '../../components/AboutUs';
import './styles.modules.sass';

function App() {
  return (
    <div className="col-lg-12 col-xs-12 mainbox">
      <Header />
      <Banner />
      <SecondBanner />
      <FeaturedStories1 />
      <Download />
      <FeaturedCarousel />
      <Newsletter />
      <Inspirations />
      <AboutUs />
    </div>
  );
}

export default App;
