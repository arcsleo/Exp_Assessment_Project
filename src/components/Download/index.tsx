import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import { Text } from '../../constants/constants';
import MobileIMG from '../../Images/mobileimg.png';
import IOSImg from '../../Images/apple-app-store-travel-awards-globestamp-7 1.png';
import AndroidImg from '../../Images/apple-app-store-travel-awards-globestamp-7 2.png';

function Download() {

  return (
    <div className="DownloadMainbox">
        <div className="d-flex flex-wrap Downloads align-items-center">
            <div className="col-lg-4 col-sm-12 col-xs-12">
                {/* Mobile Image */}
                <img src={MobileIMG} className="mobileImg" /> 
                {/* Details inside mobile image */}
                <div className="mobileoverlay">
                    <div className="d-flex flex-column mobileoverlaycover">
                        <div className="mobileoverlayHeading mb-2">{Text.FeatureStories1MainText1}</div>
                        <div className="mobileoverlayHeading mb-2">{Text.FeatureStories1MainText2}</div>
                        <div className="mobileoverlaySubhead mb-3">{Text.FeatureStories1SubText}</div>
                        <input type="button" className="contactBtn pt-2 pb-2 pl-4 pr-4"  value="Contact"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
                {/* Download Text */}
                <div className="col-lg-12 col-xs-12 DownloadHeader mt-4">
                    { Text.DownloadHead }
                </div>
                <div className="col-lg-5 col-xs-12 DownloadSecondText mt-4 p-0">
                    {Text.FeatureStories1SubText}
                </div>
                {/* IOS and Android Image */}
                <div className="col-lg-6 col-sm-10 col-xs-10 p-0 row DownloadApplogo mt-4 mb-4">
                    <div className="col-lg-6 col-sm-6 col-xs-6 pr-0">
                        <a href="https://www.apple.com/in/app-store/" target="_blank">
                            <img src={IOSImg} className="mobileImg" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6 pr-0">
                        <a href="https://play.google.com/store" target="_blank">
                            <img src={AndroidImg} className="mobileImg" /> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Download;
