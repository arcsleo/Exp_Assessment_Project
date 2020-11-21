import React from 'react';
import './styles.modules.sass';
import { Dropdown } from 'semantic-ui-react';
import { Carousel } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';
import { Text } from '../../constants/constants';
import Play from '../../Images/Play.png';
import BackgroundImage from '../../Images/Banner.png';

function Banner() {

    const [backupData, setbackupData] = React.useState([]);
    const [videoSrc, setvideoSrc] = React.useState('');
    const [showModal, setshowModal] = React.useState(false);

    const options = [{text: "",key:"",value: ""}];
        Text.CarouselData.forEach((value, index)=>{
            options.push({
                text: value.Text, key: index.toString(), value: value.Text
            });
        });
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const showPopup = (val) => {
        setvideoSrc(val);
        setshowModal(true);
    };

    const caroSelect = (val) => {
        Text.CarouselData.forEach((value, index)=>{
            if(value.Text === val.currentTarget.innerText) 
                setIndex(index);
        });
    }

  return (
    <div className="BannerMainBox">
        {/* <div className="BannerBox"> */}
        <Parallax bgImage={ BackgroundImage } strength={500} >
            <div className="d-flex BannerCover flex-column pb-0">

                {/* Header Text */}
                <div className="BannerMainText">
                    <div>
                        { Text.MainText1 }
                    </div>
                    <div>
                        { Text.MainText2 }
                    </div>
                </div>

                {/* Sub Header Text */}
                <div className="col-lg-3 col-sm-12 col-xs-12 p-0 mt-5 SubText">
                    { Text.SubText }
                </div>

                <div className="d-flex flex-row mb-5">                    
                    {/* Contact Button */}
                    <div className="col-lg-9 col-sm-12 col-xs-12 p-0 mt-5">
                        <a href="mailto:testmail@gmail.com">
                            <input type="button" className="contactBtn pt-3 pb-3 pl-5 pr-5"  value="Contact"/>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap mt-5">                    
                    {/* Contact Button */}
                    <div className="col-lg-9 col-sm-12 col-xs-12 p-0">
                        <div className="col-lg-12 dropdownbox p-0">
                            <Dropdown
                                placeholder='Search'
                                fluid
                                search
                                selection
                                options={options}
                                onChange={(values)=>caroSelect(values)}
                            />
                        </div>
                    </div>
                
                    {/* Video Div */}
                    <div className="col-lg-3 col-sm-12 col-xs-12 d-flex videoMainbox align-items-center p-0 d-md-block d-lg-block">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        { Text.CarouselData.map((value)=>{
                            return(
                                <Carousel.Item>
                                    <Carousel.Caption>
                                        <div onClick={()=>showPopup(value.Video)} className="col-lg-12 p-0 d-flex videoMainbox align-items-center">
                                            <img src={value.Images} className="videoClass"/>
                                            <img src={Play} className="playBtn"/>
                                        </div>
                                        <h3>{value.Text}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        }) }
                        </Carousel>
                    </div>
                    <div className="modal" style={showModal ? {display: "block"} : {display: "none"}} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Video</h5>
                                <button type="button" className="close" onClick={()=>setshowModal(false)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* <Player
                                    playsInline
                                    poster="/assets/poster.png"
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                /> */}
                                <video src={videoSrc} width="100%" controls></video>
                            </div>
                            <div className="modal-footer">
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        {/* </div> */}
        </Parallax>
    </div>
  );
}

export default Banner;
