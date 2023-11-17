import React from 'react';
import VideoItem from './VideoItem'; 

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.internalFileId} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
