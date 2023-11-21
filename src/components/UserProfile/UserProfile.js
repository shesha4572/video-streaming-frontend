import React from 'react';
import VideoList from './VideoList'; 
import './UserProfile.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBBtn, MDBCardTitle } from 'mdb-react-ui-kit';


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
      <div className="vh-100" style={{ backgroundColor: '#f2f2f2' }}>
  <MDBContainer className="container py-5 h-100 d-flex align-items-center justify-content-center" style={{ width: '500px' }}>
    <MDBRow className="justify-content-center">
      <MDBCol md="12" xl="8">
        <MDBCard style={{ backgroundColor: 'white'}}>
          <MDBCardBody className="d-flex align-items-center">
            <div className="me-4">
              <MDBCard style={{ backgroundColor: 'white'}}>
                <MDBCardBody>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    className="rounded-circle"
                    alt="Profile"
                    style={{ width: '120px', height: '120px' }}

                  />
                </MDBCardBody>
              </MDBCard>
            </div>
            <div>
              <MDBTypography tag="h4" className="mb-1">Name: {name}</MDBTypography>
              <MDBCardText className="mb-1">
                Username: {displayName}
              </MDBCardText>
              <MDBCardText className="small">
                Joined On: {formatDate(createdOn)}
              </MDBCardText>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>



      <div className="uploaded-videos">
        <VideoList videos={uploadedVideos} />
      </div>
    </div>
  );
};

export default UserProfile;
