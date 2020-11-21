import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import { Parallax, Background } from 'react-parallax';
import BackgroundImage from '../../Images/FeatureStory1.png';
import { Text } from '../../constants/constants';

function FeatureStories1() {

  return (
    <div id="Featurestory" className="FeatureStoriesMainDiv">
        <Parallax bgImage={BackgroundImage} strength={500}>
        <div className="col-lg-12 col-xs-12 col-xs-12 leftBox row m-0 p-0">
            <div className="col-lg-9 col-sm-12 col-xs-12 BannerBoxCover">
                <div className="BannerMainText">
                    <div>
                        { Text.FeatureStories1MainText1 }
                    </div>
                    <div>
                        { Text.FeatureStories1MainText2 }
                    </div>
                </div>

                {/* Sub Header Text */}
                <div className="col-lg-7 col-sm-12 col-xs-12 p-0 mt-3 SubText">
                    { Text.FeatureStories1SubText }
                </div>

                <div className="d-flex flex-row">                    
                    {/* Contact Button */}
                    <div className="col-lg-9 col-sm-12 col-xs-12 p-0 mt-4 mb-4">
                        <input type="button" className="contactBtn pt-3 pb-3 pl-5 pr-5"  value="Contact"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12 rightBox">
                <div className="col-lg-8 col-sm-12 col-xs-12 featureHeading mb-5">
                    {Text.FeatureHead}
                </div>
                <div className="col-lg-12 col-xs-12 p-0 userStoriesMaindiv">
                    { Text.FeatureStory.map((value)=>{
                        return(
                            <div className="col-lg-12 col-sm-12 col-xs-12 userStories d-flex pb-4 mb-4">
                                <div className="col-lg-2 col-sm-1 col-xs-1 p-0">
                                    <img src={value.userimage} className="userImage" />
                                </div>
                                <div className="col-lg-11 col-sm-11 col-xs-11">
                                    <div className="col-lg-12 col-xs-12 p-0 userStory">{value.Text}</div>
                                    <div className="col-lg-12 col-xs-12 p-0 pt-2 StoryDate">{value.Date}</div>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            </div>
        </div>
        </Parallax>
    </div>
  );
}

export default FeatureStories1;
