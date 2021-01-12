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
                src="https://media-exp1.licdn.com/dms/image/C4D22AQGWp20v6kGJhg/feedshare-shrink_1280-alternative/0/1610360252368?e=1613001600&v=beta&t=6OhXDBgUfUz20SVLh98RoGJ_4h0RtQsP6zUJUCwn4bQ" 
                alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                


            </div>
        </div>
    )
}

export default Header;
