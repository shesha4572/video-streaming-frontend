import React, {useEffect, useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import {Avatar, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const logo = 'https://img.icons8.com/dusk/64/movie-projector.png';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem("username"))
  }, []);


  const handleSearchClick = () => {
    if (inputSearch !== '') {
      navigate(`/search/${inputSearch}`);
    }
  };

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon className="header_icon" />
        <Link to='/home'>
          <img className="header_logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder='Search'
        />
        <SearchIcon onClick={handleSearchClick} className="header_inputButton" />
      </div>

      <div className="header_icons">
        <Link to='/upload'>
          <VideoCallIcon className='header_icon' />
        </Link>

        <Link to={`/profile/${username}`}>
          <Avatar className="header_icon" src="" alt="Avatar" /> <span/>
        </Link>
        <Link to={`/profile/${username}`}>
        <Typography>{username}</Typography>
        </Link>
      </div>
    </div>
  );
}

export default Header;
