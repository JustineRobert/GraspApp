import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>GraspApp News</h2>
                <InfoIcon />
            </div>
            {newsArticle("GraspApp is Ready!", "Hello, we've got good news!")}
            {newsArticle("COVID-19 Updates", "Ministry of health updates/")}
            {newsArticle("COVID-19 Updates", "https://covid19.who.int/")}
            {newsArticle("IRRI-OYOH GraspApp Launch", "Launch of GraspApp")}
            {newsArticle("IRRI News Updates", "Welcome to our News board")}
            {newsArticle("Map picker for Kampala areas of rescue", "Kampala's map")}
        </div>
    )
}

export default Widgets;
