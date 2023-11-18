import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import SidebarUpload from "./components/Uploader/SidebarUpload";
import RecommendedVideos from './components/Video/RecommendedVideos';
import Welcome from './components/Welcome/Welcome';
import Player from './components/VideoPlayer/Player';
import SearchPage from './components/Search/SearchPage';
import Login from './components/Auth/Login';
import Uploader from './components/Uploader/Uploader';
import PlayCard from './components/PlayCard/PlayCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfilePage from './components/UserProfile/UserProfilePage';

function App() {

  return (
    <div className="App">
      <div>
        <ToastContainer />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
\          <Route
            path="/home"
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
          <Route
            path="/play"
            element={
              <div>
                <Header />
                <div className="app_page">
                  {/* <Sidebar /> */}
                  <Player />
                </div>
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
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
          <Route
            path="/upload"
            element={
              <div>
                <Header />
                <div className="app_page">
                  <div className="uploader_body">
                      <SidebarUpload />
                    <Uploader />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/playcard"
            element={
              <div>
                <Header />
                <div className="app_page">
                    <Sidebar />
                  <PlayCard />
                </div>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <Header />
                <div className="app_page">
                    <Sidebar />
                  <UserProfilePage />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
