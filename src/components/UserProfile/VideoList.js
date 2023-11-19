import React from 'react';
import VideoItem from './VideoItem';
import VideoCard from "../Video/VideoCard";
import './VideoList.css';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.internalFileId} image={video.thumbnailLink} title={video.title} channel={video.ownerDisplayName} views={video.viewCounter} timestamp={video.uploadedOn} channelImage={"wewg"} videoId={video.internalFileId} />
      ))}
    </div>
  );
};

export default VideoList;
