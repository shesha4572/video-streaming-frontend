import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link>
                    <img className="header_logo" src="" alt="Logo" />
                </Link>
            </div>
            <div className="header_input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
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