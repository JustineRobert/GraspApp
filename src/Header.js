import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <img 
                src="https://cedat.mak.ac.ug/wp-content/uploads/2018/07/cropped-mak-logo-retina-1.png" 
                alt="GraspApp"/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon={NotificationsIcon} title="COVID-19"/>
                <h6 className="header__right">Language Selection</h6>
                <HeaderOption avatar="https://avatars0.githubusercontent.com/u/29596487?s=32" title="Igune Justine Robert"/>
                
            </div>
        </div>
    )
}

export default Header;
