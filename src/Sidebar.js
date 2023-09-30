import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import UploadIcon from '@mui/icons-material/Upload';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={UploadIcon} title="Upload" />
            <SidebarRow Icon={FavoriteBorderIcon} title="Favourites" />
            <hr />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <SidebarRow Icon={LogoutIcon} title="Logout" />
            <hr />
        </div>
    )
}

export default Sidebar