import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <img src={video.thumbnailLink} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.desc}</p>
        <p>Views: {video.viewCounter}</p>
      </div>
    </div>
  );
};

export default VideoItem;
