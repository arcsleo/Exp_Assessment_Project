import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Text } from '../../constants/constants';
import InspUser1 from '../../Images/InspUser1.png';
import Bottom1 from '../../Images/Bottom1.png';
import Bottom2 from '../../Images/Bottom2.png';
import Bottom3 from '../../Images/Bottom3.png';
import Bottom4 from '../../Images/Bottom4.png';

function Inspirations(props) {

    const { isSigned } = props;

    const [showModal, setshowModal] = React.useState(false);

  return (
    <div id="Inspirations" className={ isSigned ? "InspirationsCaroMainbox" : "InspirationsCaroMainbox InspirationsCaroMainbox2" }>
        {/* Inspirations Heading */}
        <div className="d-flex InspirationsCaros align-items-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="col-lg-12 InspirationsCaroHeader mt-4">
                    { Text.InspirationsHead }
                </div>
                <div className="col-lg-5 InspirationsCaroSecondText mt-4 p-0 mb-4">
                    {Text.InspirationText}
                </div>
            </div>
        </div>
        <div className="col-lg-12 row m-0 p-0">
            <div className="d-flex flex-wrap p-0">
                {/* Inspirations Grid */}
                { Text.InspirationData.map((value, index)=>{
                    return(
                        index === 0 || index === Text.InspirationData.length - 1 ?
                            <div className="col-lg-8 col-sm-12 col-xs-12 pb-4 insresponsivebox">
                                <img src={value.Image} className="inspimage1" alt=""/>
                                <div className="inspimageTextarea secondarytextarea longimg" style={value.isdiff ? { bottom : "auto" } : {} }>
                                    <div className="inspimagehead" style={value.isdiff ? { textAlign : "center" } : { textAlign : "left" } }>
                                        {value.Subtitle}
                                    </div>
                                    <div className="inspimageMain" style={value.isdiff ? { textAlign : "center" } : { textAlign : "left" } }>
                                        {value.Title}
                                    </div>
                                    <div className="col-lg-12 col-sm-12 col-xs-12 row m-0">
                                        <div style={value.isdiff ? { margin : "auto" } : {} }>
                                            {value.UsersDetails.map((userval)=>{
                                                return(
                                                    <img src={userval} className="inspuserlogotop mt-2" alt=""/>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="col-lg-4 col-sm-12 col-xs-12 pb-4 insresponsivebox">
                                <img src={value.Image} className="inspimage" alt=""/>
                                <div className={ value.isdiff ? "inspimageTextarea secondarytextarea diffimagemaindiv" : "inspimageTextarea secondarytextarea"  }>
                                    <div className="inspimagehead" style={value.isdiff ? { textAlign : "center" } : { textAlign : "left" } }>
                                        {value.Subtitle}
                                    </div>
                                    <div className="inspimageMain" style={value.isdiff ? { textAlign : "center" } : { textAlign : "left" } }>
                                        {value.Title}
                                    </div>
                                    <div className={value.isdiff ? "col-lg-11 col-sm-11 col-xs-11 row m-0 diffimagediv" : "col-lg-11 col-sm-12 col-xs-12 row m-0" }>
                                        <div style={value.isdiff ? { margin : "auto" } : {} }>
                                            {value.UsersDetails.map((userval)=>{
                                                return(
                                                    <img src={userval} className="inspuserlogo mt-2" alt=""/>
                                                );
                                            })}
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                    );
                }) }
            </div>
            {/* Inspirations Bottom Section  --- Left Side */}
            <div className="col-lg-6 align-items-center p-0 d-flex flex-wrap">
                <div className="col-lg-12 p-0">
                    <div className="col-lg-12 InspirationsCaroHeader BottomHead mt-4">
                        { Text.BottomHead1 }
                    </div>
                    <div className="col-lg-12 InspirationsCaroHeader BottomHead">
                        { Text.BottomHead2 }
                    </div>
                    <div className="col-lg-6 InspirationsCaroSecondText BottomText mt-5 mb-4">
                        {Text.BottomText}
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12 mt-4 mb-4">
                        <div className="col-lg-12 BottomButton p-0">
                            <input type="button" onClick={()=>setshowModal(true)} className="Learnmore pt-3 pb-3 pl-5 pr-5"  value="Learn More"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Inspirations Bottom Section  --- Right Side */}
            <div className="col-lg-6 d-flex flex-wrap align-items-center p-0">
                <div className="col-lg-6 col-sm-6 col-xs-6 mb-4">
                    <img src={Bottom1} className="bottom1" width="75%" />
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 mb-4">
                    <img src={Bottom2} className="bottom2" width="100%" />
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 mb-4">
                    <img src={Bottom3} className="bottom3" width="50%" />
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 pb-4">
                    <img src={Bottom4} className="bottom4" width="75%" />
                </div>
            </div>
            {/* Learn More Popup box */}
            <div className="modal" style={showModal ? {display: "block"} : {display: "none"}} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{Text.FeatureStories1MainText1}{' '}{Text.FeatureStories1MainText2}</h5>
                            <button type="button" className="close" onClick={()=>setshowModal(false)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modalbody">{Text.InspirationFullbox}</div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Inspirations;
