import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticonRounded, Mic, MoreVert, Search } from '@material-ui/icons'
import React from 'react'
import './chat.css'
const Chat = () => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                   <div className="name">ROOM NAME</div>
                   <div> last seen ....</div>
                </div>
                <div className="chat_headerRight">
                    <IconButton><Search/> </IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p  className="chat_message">
                <span className="chat_name">Dev</span>
                this is a message
                <span className="chat_timestamp">{ new Date().toUTCString() }</span>
                </p>
                <p  className="chat_message chat_reciever">
                <span className="chat_name">Dev</span>
                this is a message
                <span className="chat_timestamp">{ new Date().toUTCString() }</span>
                </p>
               
               
            </div>
            <div className="chat_footer">
            <InsertEmoticonRounded/>
            <form>
            <input placeholder="Type a message" type="text"></input>
           <button type="submit">send a message</button> 

            </form>
            <Mic/>

            </div>
        </div>
    )
}

export default Chat
