import React from 'react';
import './VideoRow.css';
import { Link } from 'react-router-dom';

function VideoRow({ title, views, timestamp, channel, description, image, internalFileId }) {

    function formatDate(value) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    }


  return (
    
    <div className='videoRow'>
      <Link to={`/play/${internalFileId}`}>
        <img src={image} width={250} height={140} alt="" />
      </Link>
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
          {channel} | {views} views | {formatDate(timestamp)}
        </p>
        <p className='videoRow_description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;