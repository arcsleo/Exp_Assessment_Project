import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { Text } from '../../constants/constants';

function Download() {

  return (
    <div id="Aboutus" className="AboutMainDiv d-flex flex-wrap">
        <div className="col-lg-10 d-flex flex-wrap">
            { Text.AboutData.map((value)=>{
                return(
                    <div className="col-lg-3 mb-4 col-sm-6 col-xs-6 p-0">
                        <div className="col-lg-12 abouthead mb-3 p-0">{value.Head}</div>
                        {value.Data.map((innerdata)=>{
                            return(
                                <div className="col-lg-12 p-0">{innerdata}</div>
                            );
                        })}
                    </div> 
                );
            }) }
            <div className="col-lg-3 col-sm-6 col-xs-6 p-0"></div>
        </div>
        <div className="col-lg-2 mb-3 abouthead">
            <div className="col-lg-12 abouthead mb-3 p-0">{Text.Contactushead}</div>
            <div className="col-lg-12 p-0">{Text.Aboutemail}</div>
            <div className="col-lg-12 p-0">{Text.Aboutphone}</div>
        </div>
        <div className="col-lg-6 col-sm-12 col-xs-12 firstdiv mt-4 d-flex align-items-center">
            Terms & conditions  |  Privacy Policy
        </div>
        <div className="col-lg-3 col-sm-12 col-xs-12 seconddiv mt-4 d-flex flex-wrap p-3 aling-items-center">
            <div className="col-lg-3 col-sm-3 col-xs-3 socialicons"><FacebookIcon /></div>
            <div className="col-lg-3 col-sm-3 col-xs-3 socialicons"><LinkedInIcon /></div>
            <div className="col-lg-3 col-sm-3 col-xs-3 socialicons"><TwitterIcon /></div>
            <div className="col-lg-3 col-sm-3 col-xs-3 socialicons"><YouTubeIcon /></div>
        </div>
        <div className="col-lg-3 col-sm-12 col-xs-12 thirddiv mt-4 mb-3 d-flex align-items-center">
            2020. All right reserved
        </div>
    </div>
  );
}

export default Download;
