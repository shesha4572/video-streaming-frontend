import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { username } = useParams();

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`http://35.221.224.70:8080/api/v1/profile/user/${username}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      setLoading(true);
      fetchUserProfile();
    }
  }, [username]);

  return (
    <div className="user-profile-page">
      <div className="header-icons">
        <div className="profile-icon">
          
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserProfile userData={userData} />
      )}
    </div>
  );
};

export default UserProfilePage;
