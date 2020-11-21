import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import { Text } from '../../constants/constants';

function SecondBanner() {

  return (
    <div className="SecondBannerMainBox">
        <div className="d-flex flex-column SecondBannerMaintext pb-3">
            <div>
                {Text.SecondBannerHeading1}
            </div>
            <div>
                {Text.SecondBannerHeading2}
            </div>
        </div>
        <div className="col-lg-12 col-xs-12 row m-0">
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
