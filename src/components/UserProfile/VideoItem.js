import React from 'react';
import './VideoItem.css';
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {

  const dateStringTimeStamp = video.uploadedOn

  function formatDate(dateStringTimeStamp) {
    const options = { year: "numeric", month: "long", day: "numeric"};
    return new Date(dateStringTimeStamp).toLocaleDateString(undefined, options);
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
        <p>{video.viewCounter} views | {formatDate} </p>
      </div>
    </ol>
      
    </div>
  );
};

export default VideoItem;
