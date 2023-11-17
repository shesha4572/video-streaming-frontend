import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://early-pugs-stand.loca.lt/api/v1/profile/user/johndoe1');
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []); 
  return (
    <div className="user-profile-page">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserProfile userData={userData} />
      )}
    </div>
  );
};

export default UserProfilePage;
