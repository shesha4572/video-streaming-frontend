import React from 'react';
import './VideoRow.css';
import { Link } from 'react-router-dom';

function VideoRow({ title, views, timestamp, channel, description, image }) {
  return (
    <div className='videoRow'>
      <Link to="/play/key">
        <img src={image} alt="" />
      </Link>
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
          {channel} . <span className='videoRow_subs'><span className="videoRow_subsNumber">{views}</span> Subscribers</span> {views} views . {timestamp}
        </p>
        <p className='videoRow_description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;


