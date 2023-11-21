import React from 'react';
import './VideoItem.css';
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="video-item">
    <ol>
    <br />
    <Link to={`/play/${video.internalFileId}`}>
      <img style={{ width: 320, height: 180 }} src={video.thumbnailLink} alt={video.title} />
    </Link>
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.desc}</p>
        <p>{video.viewCounter} views | {formatDate(video.uploadedOn)} </p>
      </div>
    </ol>
      
    </div>
  );
};

export default VideoItem;
