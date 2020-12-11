import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Search } from '@material-ui/icons';
import SidebarChat from './SidebarChat'
export const Sidebar = () => {
    return (
        <div className="sidebar">
         
            <div className="sidebar_header">
            <Avatar src="https://scontent.fudr1-1.fna.fbcdn.net/v/t1.0-9/74579705_1009744446059790_3542059967097864192_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=v0W0LGwUlhAAX9ejFmb&_nc_ht=scontent.fudr1-1.fna&oh=18929db3992235a1ee11f74304c4b41a&oe=5FF95000"/>
             <div className="sidebar_headerRight">
             <IconButton><DonutLargeIcon/></IconButton>
             <IconButton><ChatIcon/>  </IconButton>
             <IconButton><MoreVertIcon/></IconButton>
                 
             </div>
            </div>
            <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <Search/>
                <input placeholder="Search or start new chat" type="text"/>
            </div>
               
            </div>
            <div className="sidebar_chats">
                   <SidebarChat/>
                   <SidebarChat/>
                   <SidebarChat/>
                  
                </div>
        </div>
    )
}
