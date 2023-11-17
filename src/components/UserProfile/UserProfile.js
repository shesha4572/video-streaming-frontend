import React from 'react';
import VideoList from './VideoList'; 

const UserProfile = ({ userData }) => {
  if (!userData) {
    return <p>Loading...</p>;
  }

  const { name, displayName, createdOn, uploadedVideos } = userData;

  return (
    <div className="user-profile">
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Display Name: {displayName}</p>
        <p>Joined on: {new Date(createdOn).toLocaleDateString()}</p>
      </div>
      <div className="uploaded-videos">
        <h3>Uploaded Videos</h3>
        <VideoList videos={uploadedVideos} />
      </div>
    </div>
  );
};

export default UserProfile;
