import React from 'react';
import './styles.modules.sass';
import '../../css/custom.styles.css';
import { Text } from '../../constants/constants';

function Newletter(props: any) {

    const [isSigned, setisSigned] = React.useState(false);
    const [userName, setuserName] = React.useState('');
    const [validation, setvalidation] = React.useState(false);
    const [userEmail, setuserEmail] = React.useState('');
    const [userPhone, setuserPhone] = React.useState('');
    const { callbackFn } = props;

    const dataUpdation = (e, field) => {
        if(field === "name")
            setuserName(e.currentTarget.value);
        else if(field === "email")
            setuserEmail(e.currentTarget.value);
        else if(field === "phone")
            setuserPhone(e.currentTarget.value);
    };

    const signup = (e) => {
        if( userName !== "" && userEmail !== "" && userPhone !== "" )
        {
            setvalidation(false);
            callbackFn(true);
            setisSigned(true);
        }
        else
            setvalidation(true);
    };

  return (
    <div id="Newsletter" className="NewletterMainDiv">
        <div className="col-lg-12 NewletterleftBox row m-0 p-0">
            <div className="col-lg-12 col-sm-12 col-xs-12 BannerBoxCover">
                <div className="BannerMainText">
                    <div>
                        { Text.NewsLetterMainText1 }
                    </div>
                    <div>
                        { Text.NewsLetterMainText2 }
                    </div>
                </div>

                {/* Sub Header Text */}
                <div className="col-lg-3 col-sm-12 col-xs-12 p-0 mt-3 SubText">
                    { Text.NewsLetterSubText }
                </div>
            </div>
                { isSigned ?
                    <div className="col-lg-3 col-sm-11 col-xs-11 p-0 signedData">
                        Hi {userName}, Thanks for signing up.
                    </div>
                    :
                    <div className="col-lg-3 col-sm-11 col-xs-11 p-0 RegisterBox">
                        <div className="col-lg-12 pt-5 pl-5 pr-5 pb-0">
                            <input type="text" className="Namebox pb-2 mb-3" onKeyUp={(e)=>dataUpdation(e, "name")} placeholder="Name"/>
                        </div>
                        <div className="col-lg-12 pt-1 pl-5 pr-5 pb-0">
                            <input type="text" className="Namebox pb-2 mb-3" onKeyUp={(e)=>dataUpdation(e, "email")} placeholder="Email"/>
                        </div>
                        <div className="col-lg-12 pt-1 pl-5 pr-5 pb-0">
                            <input type="text" className="Namebox pb-2 mb-5" onKeyUp={(e)=>dataUpdation(e, "phone")} placeholder="Phone Number"/>
                        </div>
                        { validation ? 
                            <div className="col-lg-12 validationmsg">Please fill all the fields to continue</div>
                            : null }
                        <div className="col-lg-12 p-0">
                            <input type="button" onClick={(e)=>signup(e)} className="signupbtn p-3" value="SIGN UP NOW"/>
                        </div>
                    </div>
                }
        </div>
    </div>
  );
}

export default Newletter;
