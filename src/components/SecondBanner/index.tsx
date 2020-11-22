import React from 'react';
import './styles.modules.sass';
import { Carousel } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import '../../css/custom.styles.css';
import { Text } from '../../constants/constants';

function SecondBanner() {

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
    <div className="SecondBannerMainBox">
        {/* Video Carousel Responsive */}

        <div className="col-lg-3 col-sm-10 col-xs-10 d-flex videoMainbox videomainresponsive p-0 d-lg-none">
                        <div className="col-lg-9 col-sm-8 col-xs-8 p-0 d-lg-none">
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
                        <div className="col-lg-12 col-xs-4 col-sm-4 p-0">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                            { Text.CarouselData.map((value)=>{
                                return(
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <div onClick={()=>showPopup(value.Video)} className="d-flex align-items-center">
                                                <h3 className="h3classResponsive d-flex align-items-center">{value.Text}</h3>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            }) }
                            </Carousel>
                        </div>
                    </div>
                    {/* Popup box */}
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
                                <video src={videoSrc} width="100%" controls></video>
                            </div>
                            <div className="modal-footer">
                            </div>
                            </div>
                        </div>
                    </div>

        {/* Second Banner Heading */}
        <div className="d-flex flex-column SecondBannerMaintext pb-3">
            <div>
                {Text.SecondBannerHeading1}
            </div>
            <div>
                {Text.SecondBannerHeading2}
            </div>
        </div>
        <div className="col-lg-12 col-xs-12 row m-0">
            {/* Second Banner Bottom Tiles with overlay on hover */}
            { Text.SecondBannerTiles.map((value)=>{
                return(
                    <div className="col-lg-3 col-sm-6 col-xs-6 p-2 SecondbannerHoverTile">
                        <img className="secondbannerimg" src={value.Images} />
                        <div className="overlay m-2">
                            <div className="overlaytext">{value.Text}</div>
                        </div>
                    </div>
                );
            }) }
        </div>
    </div>
  );
}

export default SecondBanner;
