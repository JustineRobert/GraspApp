import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Message from "./Message";

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={`Type your Message here!`}/>
                    <button className="chat__inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                <CardGiftcardRoundedIcon fontSize="large"/>
                <GifRoundedIcon fontSize="large"/>
                <EmojiEmotionsRoundedIcon fontSize="large"/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
