import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector (selectUser);

    const recentItems = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" alt="" />
                <Avatar src={ user.photoURL } className="sidebar__avatar">{user.email[0]}
                </Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat" >
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,505</p>
                </div>
                <div className="sidebar__stat" >
                    <p>Viewed on post</p>
                    <p className="sidebar__statNumber">2,441</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Refugee Available Services</p>
                {recentItems('Livelihood Needs')}
                {recentItems('Survival Needs')}
                {recentItems('Health Needs')}
                {recentItems('Protection Needs')}
        
            </div>
        </div>
    );
}

export default Sidebar;
 