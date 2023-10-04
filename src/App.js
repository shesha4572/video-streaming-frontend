import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Layout/Header";
import Sidebar from './components/Layout/Sidebar';
import SearchPage from './components/Search/SearchPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import RecommendedVideos from './components/Video/RecommendedVideos';
import Player from "./components/VideoPlayer/Player";
import Uploader from "./components/Uploader/Uploader";
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayCard from './components/PlayCard/PlayCard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />

            <Route path="/login" element={
              <div>
            <Login />
            </div>
            } />

            <Route path="/signup" element={<Signup />} />
          <Route path='/home'
            element={
              <div>
                <Header />
                <div className="app_page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </div>
            }
          />
          <Route path='/play' element={
            <div>
              <Header />
              <div className="app_page">
                <Sidebar />
                <Player />
              </div>
            </div>
          } />
          <Route path='/search/:searchTerm'
            element={
              <div>
                <Header />
                <div className="app_page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </div>
            }
          />
          <Route path='/upload' element={
            <div>
              <Header />
              <div className="app_page">
                <Sidebar />
                <div className='uploader_body'>
                  <Uploader />
                </div>
              </div>
            </div>
          } />
          <Route path='/playcard' element={
            // <div>
            // <Header />
            // <div className='app_page'>
            //   <Sidebar />
              <PlayCard />
            // </div>
            // </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
