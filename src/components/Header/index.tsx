import React from 'react';
import './styles.modules.sass';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Text } from '../../constants/constants';

function Header() {

    const [showMenu, setshowMenu] = React.useState(false);

  return (
    <div className="">
        <div className="d-flex flex-wrap HeaderMainbox">
            {/* Icon Div */}
            <div className="col-xs-3 d-lg-none d-md-none d-sm-none socialdiv d-flex flex-wrap">
                <div className="col-xs-4">
                    <FacebookIcon />
                </div>
                <div className="col-xs-4">
                    <TwitterIcon />
                </div>
            </div>
            {/* Site Heading */}
            <div className="col-lg-11 col-xs-6 head p-0">
                MARVEL
            </div>
            {/* Menu bar toggling div */}
            <div onClick={()=>setshowMenu(!showMenu)} className="col-lg-1 col-xs-3 handburgerbtn p-0">
                <DragHandleIcon />
            </div>
        </div>
        <div className="d-flex flex-wrap menudiv pb-0 pt-0" style={showMenu ? {height: "auto"} : {height: "0px"}}>
            {/* Menu bar toggling div */}
            <div onClick={()=>setshowMenu(!showMenu)} className="handburgerbtnclose p-0">
                <DragHandleIcon />
            </div>
            {/* Menu Items */}
            { Text.Menubar.map((value)=>{
                return(
                    <div className="col-xs-12 col-lg-2 menu-item pb-2 pt-3">
                        <a className="menulink" onClick={()=>setshowMenu(!showMenu)} href={value.Link}>
                            { value.Title }
                        </a>
                    </div>
                );
            }) }
        </div>
    </div>
  );
}

export default Header;
