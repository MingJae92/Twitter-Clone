import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/More';
import { Button } from "@material-ui/core";

function Sidebar(){
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MessageIcon} text="Messages"/>
            <SidebarOption Icon={BookmarksIcon} text="Bookmark"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={ListIcon} text="List"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>
            <SidebarOption Icon={MoreIcon} text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;