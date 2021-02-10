import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return ( 
        <div className="header">
            
            <div className="header__left">
                <img 
                src="https://firebasestorage.googleapis.com/v0/b/graspapp-8cfb9.appspot.com/o/Logo%20IRRI%2021.png?alt=media&token=332124f4-7384-4b88-ae30-16de58a15c26" 
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
                <HeaderOption Icon={LanguageOutlinedIcon} title="English"/>
                <HeaderOption onClick={logoutOfApp} avatar={true} title={user?.displayName}/>
                
            </div>
        </div>
    )
}

export default Header;
