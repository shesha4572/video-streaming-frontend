import React from 'react'
import SidebarRow from '../Layout/SidebarRow';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import UploadIcon from '@mui/icons-material/Upload';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import './SidebarUpload.css';

function SidebarUpload() {
    return (
        <div className='sidebar-upload'>
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
            <Link to="/home">
                <SidebarRow Icon={HistoryIcon} title="History" />
            </Link>
            <Link to="/home">
                <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            </Link>
            <Link to="/home">
                <SidebarRow Icon={SettingsIcon} title="Settings" />
            </Link>
            <Link to="/">
                <SidebarRow Icon={LogoutIcon} title="Logout" />
            </Link>
            <hr />
        </div>
    )
}

export default SidebarUpload