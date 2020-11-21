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
import { SemipolarLoading } from 'react-loadingg';
import './styles.modules.sass';

function App() {

  const [isSigned, setisSigned] = React.useState(false);
  const [loader, setloader] = React.useState(true);

  const callbackFunction = (val) => {
    setisSigned(val);
  };

  const loaderFn = () => {
    setloader(false);
  };

  return (
    <div className="col-lg-12 col-xs-12 mainbox">
      { loader ? 
        <div className="loaderbox">
          <SemipolarLoading  />
        </div> : null
      }
      <div className={ loader ? "non-loaderdiv" : "" }>
        <Header />
        <Banner />
        <SecondBanner />
        <FeaturedStories1 />
        <Download />
        <FeaturedCarousel />
        <Newsletter callbackFn={callbackFunction} />
        <Inspirations isSigned={isSigned} />
        <AboutUs loaderEnd={loaderFn} />
      </div>
    </div>
  );
}

export default App;
