import React from 'react'
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom';
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
            <Link to="/home">
                <SidebarRow Icon={HomeIcon} title="Home" />
            </Link>
            <Link to="/upload">
                <SidebarRow Icon={UploadIcon} title="Upload" />
            </Link>
            <Link to="/home">
                <SidebarRow Icon={FavoriteBorderIcon} title="Favourites" />
            </Link>
            <hr />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <Link to='/'>
                <SidebarRow Icon={LogoutIcon} title="Logout" />
            </Link>
            <hr />
        </div>
    )
}

export default Sidebar