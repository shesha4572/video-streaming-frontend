import React from 'react';
import './VideoCard.css';
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";

function VideoCard({ image, title, channel, views, timestamp, channelImage , videoId }) {
    return (
        <Link to={"/play/" + videoId}>
        <div className='videoCard' >
            <img className='videoCard_thumbnail' src={image} alt="" />
            <div className="videoCard_info">
                <Avatar className='videoCard_avatar' alt={channel} src={channelImage} />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} views | {timestamp}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default VideoCard;