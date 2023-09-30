import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img className="header_logo" src="" alt="Logo" />
            </div>
            <div className="header_input">
                <input type="text" placeholder='Search' />
                <SearchIcon className="header_inputButton" />
            </div>
            <div className="header_icons">
                <VideoCallIcon className='header_icon' />
                <Avatar className='header_icon' src="" alt="Avatar" />
                <p>John Doe</p>
            </div>
        </div>
    );
}

export default Header;