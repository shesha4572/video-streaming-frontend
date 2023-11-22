import React from 'react';
import VideoList from './VideoList'; 
import './UserProfile.css'


const UserProfile = ({ userData }) => {
  if (!userData) {
    return <p>Loading...</p>;
  }

  const { name, displayName, createdOn, uploadedVideos } = userData;

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  return (
      <div className="user-profile">
      <div className="vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container py-5">
          <div className="id-card mx-auto">
            <div className="id-card-left">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                className="rounded-circle"
                alt="Profile"
                style={{ width: '120px', height: '120px' }}
              />
            </div>
            <div className="id-card-right">
              <div className="id-card-row">
                <strong>Name:</strong> {name}
              </div>
              <div className="id-card-row">
                <strong>Username:</strong> {displayName}
              </div>
              <div className="id-card-row">
                <strong>Joined On:</strong> {formatDate(createdOn)}
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="uploaded-videos">
        <VideoList videos={uploadedVideos} />
      </div>
    </div>
  );
};

export default UserProfile;
