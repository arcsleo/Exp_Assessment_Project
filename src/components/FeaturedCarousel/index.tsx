import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Text } from '../../constants/constants';
import ReactCardCarousel from 'react-card-carousel';
import { url } from 'inspector';

function FeatureCarousel() {

  return (
    <div className="FeatureCaroMainbox">
        {/* Carousel Heading */}
        <div className="d-flex FeatureCaros align-items-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="col-lg-12 FeatureCaroHeader mt-4">
                    { Text.StoryCarouselHead }
                </div>
                <div className="col-lg-5 FeatureCaroSecondText mt-4 p-0 mb-4">
                    {Text.StoryCarouselSubHead}
                </div>
            </div>
        </div>
        {/* Story Carousel */}
        <div className="col-lg-12 row m-0 p-0 caroDivBox">
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
          { Text.CarouselImages.map((value)=>{
            return(
              <div className="cardstyle" style={{backgroundImage: "url(" + value.Image + ")"}}>
                {value.Title}
              </div>
            );
          }) }
        </ReactCardCarousel>
        </div>
    </div>
  );
}

export default FeatureCarousel;
