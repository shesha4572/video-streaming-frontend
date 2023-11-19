import React from 'react';
import './VideoItem.css';
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
    <ol>
    <br />
    <Link to={`/play/${video.internalFileId}`}>
      <img src={video.thumbnailLink} alt={video.title} />
    </Link>
      <div className="video-info">
        <h3>Title: {video.title}</h3>
        <p>Description: {video.desc}</p>
        <p>Views: {video.viewCounter}</p>
      </div>
    </ol>
      
    </div>
  );
};

export default VideoItem;
