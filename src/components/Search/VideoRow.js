import React from 'react';
import './VideoRow.css';
import { Link } from 'react-router-dom';

function VideoRow({ title, views, timestamp, channel, description, image, internalFileId }) {
  console.log('VideoRow Props:', { title, views, timestamp, channel, description, image, internalFileId });

  return (
    
    <div className='videoRow'>
      <Link to={`/play/${internalFileId}`}>
        <img src={image} alt="" />
      </Link>
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
          {channel} . {views} views . {timestamp}
        </p>
        <p className='videoRow_description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;