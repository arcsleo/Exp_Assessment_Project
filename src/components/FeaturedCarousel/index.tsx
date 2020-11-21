import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Text } from '../../constants/constants';
import Whirligig from 'react-whirligig'
import Caro1 from '../../Images/FeatureStoryCaro1.png';
import Caro2 from '../../Images/FeatureStoryCaro2.png';
import Caro3 from '../../Images/FeatureStoryCaro3.png';

function FeatureCarousel() {

  let whirligig;
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className="FeatureCaroMainbox">
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
        <div className="col-lg-12 row m-0 p-0">
          <div onClick={prev} className="carodiv leftcarodiv d-flex align-items-center p-3">
              <span aria-hidden="true" className="carousel-control-prev-icon" />
          </div>
          <Whirligig
            visibleSlides={3}
            gutter="1em"
            ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            <img src={Caro1} width="100%" height="100%" />
            <img src={Caro2} width="100%" height="100%" />
            <img src={Caro3} width="100%" height="100%" />
            <img src={Caro1} width="100%" height="100%" />
            <img src={Caro3} width="100%" height="100%" />
            <img src={Caro2} width="100%" height="100%" />
            <img src={Caro1} width="100%" height="100%" />
            <img src={Caro2} width="100%" height="100%" />
            <img src={Caro3} width="100%" height="100%" />
            <img src={Caro2} width="100%" height="100%" />
            <img src={Caro1} width="100%" height="100%" />
          </Whirligig>
        <div className="carodiv rightcardiv d-flex align-items-center p-3" onClick={next}>
            <span aria-hidden="true" className="carousel-control-next-icon" />
        </div>
        </div>
    </div>
  );
}

export default FeatureCarousel;
