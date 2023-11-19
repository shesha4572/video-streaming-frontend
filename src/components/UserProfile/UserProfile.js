import React from 'react';
import VideoList from './VideoList'; 
import './UserProfile.css'

const UserProfile = ({ userData }) => {
  if (!userData) {
    return <p>Loading...</p>;
  }

  const { name, displayName, createdOn, uploadedVideos } = userData;

  return (
    <div className="user-profile">
      <div className="profile-info">
        <h3>Name: {name}</h3>
        <p>Display Name: {displayName}</p>
        <p>Joined on: {new Date(createdOn).toLocaleDateString()}</p>
      </div>
      <div className="uploaded-videos">
        <VideoList videos={uploadedVideos} />
      </div>
    </div>
  );
};

export default UserProfile;
