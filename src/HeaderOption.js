import React, { Icon } from "react";
import "./HeaderOption.css";


function HeaderOption({ avatar, Icons, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" /> }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
