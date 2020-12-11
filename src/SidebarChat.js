import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebarchat.css'
const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
               <div className="name">laxmikant</div>
               <div>this is the last message</div> 
            </div>
        </div>
    )
}

export default SidebarChat
