import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './PlayCard.css';

function PlayCard() {
  return (
    <div className="page-container">
      <div className="right-bottom">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Video Making</Card.Title>
              <Card.Subtitle>2023
                &emsp;1 hr
                &emsp;video</Card.Subtitle>
              <br />
              <br />
              <Card.Text>
              Creating a video involves pre-production steps like idea development, scriptwriting, and storyboarding, followed by filming where you set up, shoot scenes, and direct actors. 
              Post-production includes editing, adding music, and finalizing the video for a polished result.
              </Card.Text>
            </Card.Body>
            <div className="card-links">
                <a href="/play" className="btn btn-outline-light move-right-up">Watch Now</a>
            </div>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default PlayCard;
