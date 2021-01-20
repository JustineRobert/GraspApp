import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";


function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div className="headerOption">
            { avatar && (
                <Avatar className="headerOption__icon" src={avatar}/>
            )}
            {Icon && <Icon className='headerOption__icon' /> }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
