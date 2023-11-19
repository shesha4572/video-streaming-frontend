import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
    <ol>
    <br />
      <img src={video.thumbnailLink} alt={video.title} />
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
