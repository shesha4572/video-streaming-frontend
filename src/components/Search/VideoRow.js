import React from 'react';
import './VideoRow.css';
import { Link } from 'react-router-dom';

function VideoRow({ title, views, timestamp, channel, description, image, internalFileId }) {

  const dateStringTimeStamp = timestamp
  
  function formatDate(dateStringTimeStamp) {
    const options = { year: "numeric", month: "long", day: "numeric"};
    return new Date(dateStringTimeStamp).toLocaleDateString(undefined, options);
  }


  return (
    
    <div className='videoRow'>
      <Link to={`/play/${internalFileId}`}>
        <img style={{ width: 320, height: 180 }} src={image} alt="" />
      </Link>
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
          {channel} | {views} views | {formatDate} 
        </p>
        <p className='videoRow_description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;